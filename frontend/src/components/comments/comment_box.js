import React from 'react';

class CommentBox extends React.Component {
  redner() {
    return (
      <div>
        <h3>{this.props.text}</h3>
      </div>
    );
  }
}

export default CommentBox;