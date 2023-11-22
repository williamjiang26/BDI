// Authenticate Plotly.js
//var plotly = require('plotly')("emoya", "5lFpkaTtYIuLhyRQJUHs");

// Define the bdi score data
var bdiData = {
  x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00', '2014-1-04 22:23:00', '2014-2-04 22:23:00', '2014-3-04 22:23:00', '2014-4-04 22:23:00', '2014-5-04 22:23:00', '2014-6-04 22:23:00', '2014-7-04 22:23:00', '2014-8-04 22:23:00', '2014-9-04 22:23:00'],
  y: [62, 58, 56, 51, 44, 47, 39, 33, 25, 23, 17, 14],
  type: 'scatter'
};

// Define the heatmap data
var heatmap = {
  z: [[1],[2],[3],[4],[5],[6]],
  x: bdiData.x,
  opacity: 0,
  type: 'heatmap',
  colorbar:{
    tickmode: 'array',
    ticktext: ['Minimal', 'Mild', 'Average', 'Moderate', 'Severe', 'Extreme'],
    tickvals: [1,2,3,4,5,6]
  }
};

// Define the graph's data
data = [bdiData, heatmap]

// Define Layout
var layout = {
  title: "BDI Scores Timeline",
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
  }
};

Plotly.newPlot('myPlot', data, layout);