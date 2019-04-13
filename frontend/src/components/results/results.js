import React from 'react';
import {withRouter} from 'react-router-dom';
import ChartContainer from '../../charts/chart';
import ChartEmotionsContainer from '../../charts/chart_emotions';
import Tweets from '../tweets/tweets';

class Results extends React.Component {
  
  componentWillMount() {
    this.props.fetchComments();
  }

  render() {
    return(
      <div className="results-page">
        <div className="results-page-graphs">
          <ChartContainer sentiments={this.props.sentiments }  search={this.props.search} tweets={this.props.tweets}/> 
          <ChartEmotionsContainer emotions={this.props.emotions }  search={this.props.search} tweets={this.props.tweets}/> 
        </div>
      <Tweets tweets={this.props.tweets} />
      </div> 
    )
  }
}

export default withRouter(Results);