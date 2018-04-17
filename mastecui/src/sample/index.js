import React, { Component } from 'react';
import 'amcharts3';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/plugins/dataloader/dataloader';
import AmCharts from "@amcharts/amcharts3-react";
import './style.css';


// Generate random data
function generateData() {
  var firstDate = new Date();

  var dataProvider = [];

  for (var i = 0; i < 100; ++i) {
    var date = new Date(firstDate.getTime());

    date.setDate(i);

    dataProvider.push({
      date: date,
      value: Math.floor(Math.random() * 100)
    });
  }

  return dataProvider;
}


// Component which contains the dynamic state for the chart
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataProvider: generateData(),
      timer: null
    };
  }

  componentDidMount() {
    this.setState({
      // Update the chart dataProvider every 3 seconds
      timer: setInterval(() => {
        this.setState({
          dataProvider: generateData()
        });
      }, 3000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    const config = {
	"type": "serial",
	"categoryField": "date",
  "labelRotation":"true",
	"startDuration": 1,
	"categoryAxis": {
		"gridPosition": "start"
	},
	"trendLines": [],
	"graphs": [
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"fillAlphas": 1,
			"id": "AmGraph-2",
			"title": "graph 2",
			"type": "column",
			"valueField": "value"
		}
	],
	"guides": [],
	"valueAxes": [
		{
			"id": "ValueAxis-1",
			"stackType": "regular",
			"title": "Axis title"
		}
	],
	"allLabels": [],
	"balloon": {},
	"legend": {
		"enabled": true,
		"useGraphSettings": true
	},
	"titles": [
		{
			"id": "Title-1",
			"size": 15,
			"text": "Chart Title"
		}
	],
	"dataProvider": this.state.dataProvider
};

    return (
      <div className="App">
        <AmCharts.React style={{ width: "100%", height: "500px" }} options={config} />
      </div>
    );
  }
}

export default App;
