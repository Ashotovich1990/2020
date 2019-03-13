import React from 'react';
import {withRouter} from 'react-router-dom';
import CommentBox from './comment_box';
import '../../stylesheets/comments.scss';
import CommentComposeContainer from './comment_compose_container'

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    }
  }

  componentWillMount() {
    this.props.fetchComments();
  }

  componentWillReceiveProps(newState) {
    this.setState({ comments: newState.comments });
  }

  render() {
    
    if (this.state.comments.length === 0) {
      return (
        <aside className="comments-container">
          <div className='comment-sidebar-sticky'>
            <h2 id='comment-sidebar-title'>Join the Conversation</h2>
            <div className='comment-sidebar-body'>
            </div>
          </div>
          <CommentComposeContainer />
        </aside>
      )
    } else {
      return (
        <aside className="comments-container">
          <h2 id='comment-sidebar-title'>Join the Conversation</h2>
          <div className='comment-sidebar-body'>
            <ul>
              {this.state.comments.map(comment => (
                <CommentBox key={comment._id} text = {comment.text} />
              ))}
            </ul>
          </div>
         <CommentComposeContainer />
        </aside>
      )
    }
    
  }
}

export default withRouter(Comments);