import React from 'react';

class MethodologyEmotions extends React.Component {
  render() {
    let excited;
    let fear;
    let bored;
    let sad;
    let happy;
    let angry;
    let tweetCount;
    if (this.props.emotions.probabilities) {
      excited = (this.props.emotions.probabilities.Excited*100).toFixed(1) + "%";
      fear = (this.props.emotions.probabilities.Fear*100).toFixed(1) + "%";
      bored = (this.props.emotions.probabilities.Bored*100).toFixed(1) + "%";
      sad = (this.props.emotions.probabilities.Sad*100).toFixed(1) + "%";
      happy = (this.props.emotions.probabilities.Happy*100).toFixed(1) + "%";
      angry = (this.props.emotions.probabilities.Angry*100).toFixed(1) + "%";
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
          {tweetCount} tweets
          <br/>
          <span id="excited">Excited score:</span> {excited}
          <br/>
          <span id="fear">Fear score:</span> {fear}
          <br/>
          <span id="bored">Bored score:</span> {bored}
          <br/>
          <span id="sad">Sad score:</span> {sad}
          <br/>
          <span id="happy">Happy score:</span> {happy}
          <br/>
          <span id="angry">Angry score:</span> {angry}
          <br/>
        </div>
      </div>
    );
  }
}

export default MethodologyEmotions;