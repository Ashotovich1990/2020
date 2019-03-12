import React from 'react';
import CommentBox from './comment_box';

class CommentCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      newComment: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({newComment: nextProps.newComment.text});
  }

  handleSubmit(e) {
    e.preventDefault();

    let comment = {
      text: this.state.text
    };

    this.props.composeComment(comment);
    this.setState({text: ""})
  }

  update() {
    return e => this.setState({
      text: e.currentTarget.value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="textarea"
              value ={this.state.text}
              onChange={this.update()}
              placeholder="Write your comment.."
              />
              <input type="submit" value="Submit" />
            </div>
          </form>
          <br />
          <CommentBox text={this.state.newComment} />
        </div>
    )
  }
}

export default CommentCompose;