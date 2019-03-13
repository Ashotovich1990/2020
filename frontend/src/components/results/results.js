import React from 'react';
import {withRouter} from 'react-router-dom';
import ChartContainer from '../../charts/chart';
import Tweets from '../tweets/tweets';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   this.props.fetchComments();
  // }

  render() {
    return(
      <div className="results-page">
        
      <ChartContainer sentiments={this.props.sentiments}/> 
      <Tweets tweets={this.props.tweets} />
      </div> 
    )
  }
}

export default withRouter(Results);