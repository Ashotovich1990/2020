import React from 'react';

class CommentBox extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.text}</h3>
        <h3>{this.props.user}</h3>
      </div>
    );
  }
}

export default CommentBox;