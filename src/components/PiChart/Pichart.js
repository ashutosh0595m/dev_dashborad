import React from 'react'
import { Chart } from "react-google-charts";
import './pichart.scss';
export const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  
  export const options = {
    // title: "My Daily Activities",
    is3D: true,
  };
const Pichart = () => {
  return (
    <div className='piChart'>
     <h1 className="title">My Daily Activities</h1>
        <Chart
      chartType="PieChart"
      data={data}
      options={options}
    //   width={"100%"}
    //   height={"400px"}
    
    />
    </div>
  )
}

export default Pichart;