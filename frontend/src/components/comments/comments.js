import React from 'react';
import {withRouter} from 'react-router-dom';
import CommentBox from './comment_box';

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
      return (<div>There are no Comments</div>)
    } else {
      return (
        <div>
          <h2>All Comments</h2>
          {this.state.comments.map(comment => (
            <CommentBox key={comment._id} text = {comment.text} />
          ))}
        </div>
      )
    }
  }
}

export default withRouter(Comments);