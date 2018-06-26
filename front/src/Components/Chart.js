import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts);

export default class Chart extends Component {
    constructor(props){
    	super(props);
    }

    render() {
        const {
            data,
            title,
            numberPrefix,
            subCaption
        } = this.props;
        const myDataSource = {
          chart: {
            caption: title,
            subCaption: subCaption,
            numberPrefix: numberPrefix,
          },
          data
        };
        const chartConfigs = {
            type: 'pie3d',
            dataFormat: 'json',
            width: '100%',
            dataSource: myDataSource,
        };
        return (
            <ReactFC {...chartConfigs} />
        );
    }
}
