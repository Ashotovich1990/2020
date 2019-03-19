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
        
        <p>The following graph contains the following data points:</p>
        
        <p>Data is based off {tweetCount} tweets</p>
        <p><span className="positiveLabel">Positive score:</span> {positive}</p>
        <p><span className="neutralLabel">Neutral score:</span> {neutral}</p>
        <p><span className="negativeLabel">Negative score:</span> {negative}</p>
     
      
      </div>
    );
  }
}

export default Methodology;