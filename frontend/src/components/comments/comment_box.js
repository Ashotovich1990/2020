import React from 'react';

class CommentBox extends React.Component {
  render() {
    return (
      <div className="list-item-container">
        <h3 className="comment-box">{this.props.text}</h3>
      </div>
    );
  }
}

export default CommentBox;