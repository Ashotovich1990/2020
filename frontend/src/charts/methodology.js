import React from 'react';

class Methodology extends React.Component {
  render() {
    let positive;
    let neutral;
    let negative;
    let tweetCount;
    if (this.props.sentiments.probabilities) {
        positive = (this.props.sentiments.probabilities.positive*100).toFixed(1) + "%";
        neutral = (this.props.sentiments.probabilities.neutral*100).toFixed(1) + "%";
        negative = (this.props.sentiments.probabilities.negative*100).toFixed(1) + "%";
        tweetCount = this.props.tweets.length;
      
    } else {
        return null;
    }
    return (
      
      <div className="methodology-container">
        <h2>Methodology</h2> 
        <p>The following graph contains the following data points:</p>
        <br/>
        <p>{tweetCount} tweets</p>
        <p><span className="positiveLabel">Positive score:</span> {positive}</p>
        <p><span className="neutralLabel">Neutral score:</span> {neutral}</p>
        <p><span className="negativeLabel">Negative score:</span> {negative}</p>
     
      
      </div>
    );
  }
}

export default Methodology;