import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
      {name: 'Page A', uv: 4000, pv: 9000},
      {name: 'Page B', uv: 3000, pv: 7222},
      {name: 'Page C', uv: 2000, pv: 6222},
      {name: 'Page D', uv: 1223, pv: 5400},
      {name: 'Page E', uv: 1890, pv: 3200},
      {name: 'Page F', uv: 2390, pv: 2500},
      {name: 'Page G', uv: 3490, pv: 1209},
];

class SimpleLineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:""
    }
  }
  
  /*componentWillMount(props){
    alert("props.server");
  }*/

  componentWillReceiveProps(nextProps){
    this.setState({data:nextProps.dataServer});
  }

	render () {
    if(this.state.data === ""){
      return (
        <LineChart width={600} height={300} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="name"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      );
    }else{
      console.log(this.state.data);
      return (
        <p>
          <h3>SEARCH</h3>          
          <LineChart width={600} height={300} data={this.state.data.search.points}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="x"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line name="searches per minute in the last hour" type="monotone" dataKey="y" stroke="#8884d8" activeDot={{r: 8}}/>
          </LineChart>

          <h3>ACTIVE</h3>          
          <LineChart width={600} height={300} data={this.state.data.active.points}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="x"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line name="active users per minute in the last hour" type="monotone" dataKey="y" stroke="#82ca9d" activeDot={{r: 8}}/>
          </LineChart>
        </p>
      );
    }
  }
}

export default SimpleLineChart;