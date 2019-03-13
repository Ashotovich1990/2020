import React from 'react';
import TweetItem from './tweet_item';
import '../../stylesheets/tweets.scss';

class Tweets extends React.Component {
  constructor(props) {
    super (props);
  }

  render() {
    
    const tweets = this.props.tweets.map((tweet, i) => (
      <TweetItem key={i} tweet={tweet} />
    ));

    return (
      <div className="tweets-list-container">
        <h1 className="tweets-header">Tweets Analyzed</h1>
        <ul className="tweets-list">
          {tweets}
        </ul>
      </div>
    )
  }
}

export default Tweets;