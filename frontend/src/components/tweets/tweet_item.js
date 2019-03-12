import React from 'react';

class TweetItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.tweet}</li>
    )
  }
}

export default TweetItem;