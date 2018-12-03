import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class SimpleBarChart extends React.Component{
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
        <BarChart width={600} height={300} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <CartesianGrid strokeDasharray="3 3"/>
         <XAxis dataKey="name"/>
         <YAxis/>
         <Tooltip/>
         <Legend/>
         <Bar dataKey="uv" fill="#8884d8" />
        </BarChart> 
      );
    }else{
      return (
        <p>
          <h3>PUBLISH</h3>
        <BarChart width={600} height={300} data={this.state.data.publish.points}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <CartesianGrid strokeDasharray="3 3"/>
         <XAxis dataKey="x"/>
         <YAxis/>
         <Tooltip/>
         <Legend />
         <Bar  name="publications per hour in the moth" dataKey="y" fill="#8884d8" />
        </BarChart>

        <h3>SIGNUP</h3>
        <BarChart width={600} height={300} data={this.state.data.signup.points}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <CartesianGrid strokeDasharray="3 3"/>
         <XAxis dataKey="x"/>
         <YAxis/>
         <Tooltip/>
         <Legend />
         <Bar name="registered user per hour in the month" dataKey="y" fill="#82ca9d" />
        </BarChart>
      </p>
      );
    }
  }
}

export default SimpleBarChart;
