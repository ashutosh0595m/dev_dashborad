import React from 'react';
import PieChart from '../../components/PiChart/Pichart.js';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import "./home.scss";
import BarCharts  from '../../components/barChart/BarChart';
import List from '../../components/table/Table';

const Home = () =>  {
  return (
    <div className='home'>
       <Sidebar/>
       <div className='homeContainer'>
         <Navbar/>
       <div className='widgets'>
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
       </div>
       <div className='charts'>
         <Featured/>
         <Chart/>
       </div>
       <div className='charts_new'>
         {/* <Featured/>
         <Chart/> */}
         <PieChart/>
         <BarCharts/>
       </div>
       <div className='listContainer'>
          <div className='listTitle'>
            Latest Transaction
            <List/>
          </div>
       </div>
       </div>
    </div>
  )
}

export default Home;