import React from 'react';
import {withRouter} from 'react-router-dom';
import ChartComponent from '../../charts/charts';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchComments();
  }

  render() {
   <div>
     <ChartContainer /> 
    </div> 
  }
}

export default withRouter(Results);