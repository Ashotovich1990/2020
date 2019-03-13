import React from 'react';
import {withRouter} from 'react-router-dom';
import ChartContainer from '../../charts/chart';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   this.props.fetchComments();
  // }

  render() {
    return(
      <div>
        
      <ChartContainer sentiments={this.props.sentiments }  search={this.props.search} tweets={this.props.tweets}/> 
      </div> 
    )
  }
}

export default withRouter(Results);