import React from 'react';

class Methodology extends React.Component {
  render() {
    let positive;
    let neutral;
    let negative;
    let tweetCount;
    if (this.props.sentiments.probabilities) {
        positive = this.props.sentiments.probabilities.positive;neutral = this.props.sentiments.probabilities.neutral;negative = this.props.sentiments.probabilities.negative;
        tweetCount = this.props.tweets.length;
      
    } else {
        return null;
    }
    return (
      
      <div className="methodology-container">
        <h2>Methodology</h2>
        <div>
          The following graph contains the following data points:
          <br/>
          <br/>
          Data is based off {tweetCount} tweets
          <br/>
          Positive score: {positive}
          <br/>
          Neutral score: {neutral}
          <br/>
          Negative score: {negative}
          <br/>
        </div>
      </div>
    );
  }
}

export default Methodology;