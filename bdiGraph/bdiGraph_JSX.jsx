import React from 'react';
import Plot from 'react-plotly.js';
import './App.css';

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

// We need to insert bdi scores and time dates into bdiData.x and bdiData.y

const bdiData = {
    x: ['2022-10-04 22:23:00', '2022-11-04 22:23:00', '2022-12-04 22:23:00', '2023-1-04 22:23:00', '2023-2-04 22:23:00', '2023-3-04 22:23:00', '2023-4-04 22:23:00', '2023-5-04 22:23:00', '2023-6-04 22:23:00', '2023-7-04 22:23:00', '2023-8-04 22:23:00', '2023-9-04 22:23:00'],
    y: [62, 58, 56, 51, 44, 47, 39, 33, 25, 23, 17, 14],
    type: 'scatter',
    name: "BDI Score"
}

const heatmap = {
    z: [[1],[2],[3],[4],[5],[6]],
    x: bdiData.x,
    opacity: 0,
    type: 'heatmap',
    colorbar:{
        tickmode: 'array',
        ticktext: ['Minimal', 'Mild', 'Average', 'Moderate', 'Severe', 'Extreme'],
        tickvals: [1,2,3,4,5,6]
    }
}

function App() {
  return (
    <div>

    <body>
        <h1> Here is a plot of your BDI scores over time </h1>
    </body>

    <Plot
        data={[bdiData, heatmap]}
        layout={
            {title: "BDI Scores Timeline",
            xaxis: {
                title: "BDI Test Date",
                range: [bdiData.x[0], bdiData.x[bdiData.x.length - 1]],
                rangeselector: {buttons: [
                {
                    count: 1,
                    label: '1m',
                    step: 'month',
                    stepmode: 'backward'
                },
                {
                    count: 3,
                    label: '3m',
                    step: 'month',
                    stepmode: 'backward'
                },
                {
                    count: 6,
                    label: '6m',
                    step: 'month',
                    stepmode: 'backward'
                },
                {step: 'all'}
                ]},
            rangeslider: {
                visible: true,
                range: [bdiData.x[0], bdiData.x[bdiData.x.length - 1]]
            },
            type: 'date'
            },
            yaxis: { 
                title: "BDI Score",
                autorange: true
            }}
        }
    />
    </div>
    );
}

export default App;
