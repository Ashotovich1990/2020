import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import MethodologyEmotions from './methodology_emotions';

class ChartEmotionsContainer extends React.Component {
    
    render() {
        let data;
        
        if (this.props.emotions.probabilities) {
            
            data = {
                labels: ["Excited", "Fear", "Bored", "Sad", "Happy", "Angry"],
                datasets: [{
                    label: `Public opinion on ${this.props.search}`,
                    backgroundColor: [ '#88D8B0', '#FF6F69','#FFCC5C','#800080','#FFFF00','#000080'],
                    data: [this.props.emotions.probabilities.Excited, this.props.emotions.probabilities.Fear, this.props.emotions.probabilities.Bored,this.props.emotions.probabilities.Sad,this.props.emotions.probabilities.Happy,this.props.emotions.probabilities.Angry],
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
                < Doughnut data={data} options={options} />
                < MethodologyEmotions emotions={this.props.emotions} tweets={this.props.tweets} />
            </div>
        ) 

    }
}

export default ChartEmotionsContainer;