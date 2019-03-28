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

  componentDidMount() {
    this.props.fetchComments();
  }
  
  render() {
      return (
        <aside className="comments-container">
          <h2 id="commentBoxHeader">Join the conversation</h2>
          <div className='comment-sidebar-body'>
            <ul>
           
              {this.props.comments.map(comment => (
                <CommentBox key={comment._id}
                  username={comment.user.username}
                  text = {comment.text} />
              ))}
            </ul>
          </div>
         <CommentComposeContainer />
        </aside>
      )    
  }
}

export default withRouter(Comments);