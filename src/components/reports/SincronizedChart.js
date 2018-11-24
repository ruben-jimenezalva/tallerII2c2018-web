import React from 'react';
import {LineChart, Line, AreaChart, Area, Brush, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const data = [
      {name: 'Page A', uv: 4000, pv: 9000},
      {name: 'Page B', uv: 3000, pv: 7222},
      {name: 'Page C', uv: 2000, pv: 6222},
      {name: 'Page D', uv: 1223, pv: 5400},
      {name: 'Page E', uv: 1890, pv: 3200},
      {name: 'Page F', uv: 2390, pv: 2500},
      {name: 'Page G', uv: 3490, pv: 1209},
];

class SincronizedChart extends React.Component {
	render () {
  	return (
    	<div>
      	<h4>A demo of synchronized AreaCharts</h4>
        <LineChart width={600} height={200} data={data} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Line type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
        </LineChart>
        <p>Maybe some other content</p>
        <LineChart width={600} height={200} data={data} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Line type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
          <Brush />
        </LineChart>
        <p>Maybe some other content</p>
        <AreaChart width={600} height={200} data={data} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
        </AreaChart>
      </div>
    );
  }
}

export default SincronizedChart;