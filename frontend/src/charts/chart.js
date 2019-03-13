import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Methodology from './methodology';

class ChartContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let data;
        
        if (this.props.sentiments.probabilities) {
            
            data = {
                labels: ["Positive", "Neutral", "Negative"],
                datasets: [{
                    label: `Public opinion on ${this.props.search}`,
                    backgroundColor: [ '#88D8B0', '#FFCC5C','#FF6F69'],
                    data: [this.props.sentiments.probabilities.positive, this.props.sentiments.probabilities.neutral, this.props.sentiments.probabilities.negative],
                }]
            }
        } else {
            data = {
                labels: ["Positive", "Neutral", "Negative"],
                datasets: [{
                    label: `Public opinion`,
                    backgroundColor: [ '#88D8B0', '#FFCC5C','#FF6F69'],
                    data: [5,5,5],
                }]
            }
        }
                
        const options = {
            
            title: {
                display: true,
                text: `Public Opinion on ${this.props.search}`,
                fontSize: 24
            }
        }

        return(
            <div className="graph-container">
                < Methodology sentiments={this.props.sentiments} tweets={this.props.tweets} />
                < Doughnut data={data} options={options} />
            </div>
        ) 

    }
}

export default ChartContainer;