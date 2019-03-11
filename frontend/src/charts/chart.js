import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [{
        label: "Public opinion on Hillary Clinton",
        backgroundColor: ['#D2222D', '#FFBF00', '#238823'],
        data: [2, 10, 5],
    }]
}

const options = {
    
    title: {
        display: true,
        text: 'Public Opinion on Hillary Clinton',
        fontSize: 24
    }
}


class ChartContainer extends React.Component {
    render() {
        return(
            <div className="graph-container">
                < Doughnut data={data} options={options} />
            </div>
        ) 

    }
}

export default ChartContainer;