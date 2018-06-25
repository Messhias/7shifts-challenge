import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts);

export default class Chart extends Component {
    constructor(props){
    	super(props);
    	this.state = {
            data: []
        };
    }



    render() {
        const { data } = this.state;
        const chartConfigs = {
            type: 'pie3d',
            dataFormat: 'json',
            width: '100%',
            dataSource: data,
        };
        return (
            <ReactFC {...chartConfigs} />
        );
    }
}
