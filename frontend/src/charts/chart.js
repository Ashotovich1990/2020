import React from 'react';
import { Doughnut } from 'react-chartjs-2';




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
                    label: "Public opinion on Hillary Clinton",
                    backgroundColor: ['#FF6F69', '#FFCC5C', '#88D8B0'],
                    data: [this.props.sentiments.probabilities.positive, this.props.sentiments.probabilities.neutral, this.props.sentiments.probabilities.negative],
                }]
            }
        } else {
            data = {
                labels: ["Positive", "Neutral", "Negative"],
                datasets: [{
                    label: "Public opinion on Hillary Clinton",
                    backgroundColor: ['#FF6F69', '#FFCC5C', '#88D8B0'],
                    data: [5,5,5],
                }]
            }
        }
        
        
        const options = {
            
            title: {
                display: true,
                text: 'Public Opinion on Hillary Clinton',
                fontSize: 24
            }
        }

        return(
            <div className="graph-container">
                < Doughnut data={data} options={options} />
            </div>
        ) 

    }
}

export default ChartContainer;