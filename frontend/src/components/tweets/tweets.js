import React from 'react';
import TweetItem from './tweet_item';
import '../../stylesheets/tweets.scss';

class Tweets extends React.Component {
  constructor(props) {
    super (props);
    // this.state = {
    //   tweets: []
    // }
  }

  render() {
    
    const tweets = this.props.tweets.map((tweet, i) => (
      <TweetItem key={i} tweet={tweet} />
    ));

    return (
      <ul className="tweets-list">
        {tweets}
      </ul>
    )
  }
}

export default Tweets;