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
      
        <form onSubmit={this.handleSubmit} className="comment-form-container">
          <div className="comment-form">
            <input type="textarea"
              value ={this.state.text}
              onChange={this.update()}
              placeholder="Write your message.."
              />
              <input className="comment-submit" type="submit" value="Submit" />
            </div>
          </form>
          
        
    )
  }
}

export default CommentCompose;