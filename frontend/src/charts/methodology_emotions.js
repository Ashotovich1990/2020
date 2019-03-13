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
      excited = this.props.emotions.probabilities.Excited;
      fear = this.props.emotions.probabilities.Fear;
      bored = this.props.emotions.probabilities.Bored;
      sad = this.props.emotions.probabilities.Sad;
      happy = this.props.emotions.probabilities.Happy;
      angry = this.props.emotions.probabilities.Angry;
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
          Excited score: {excited}
          <br/>
          Fear score: {fear}
          <br/>
          Bored score: {bored}
          <br/>
          Sad score: {sad}
          <br/>
          Happy score: {happy}
          <br/>
          Angry score: {angry}
          <br/>
        </div>
      </div>
    );
  }
}

export default MethodologyEmotions;