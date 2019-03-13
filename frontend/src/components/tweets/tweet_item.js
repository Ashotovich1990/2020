import React from 'react';

class TweetItem extends React.Component {
  render() {
    return (
      <li>{this.props.tweet}</li>
    )
  }
}

export default TweetItem;