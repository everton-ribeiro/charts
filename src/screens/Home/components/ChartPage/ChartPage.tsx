import React from 'react';
import Highcharts from 'highcharts/highstock'

import ChartLine from '@screens/Home/components/ChartLine';
import ChartBar from '@screens/Home/components/ChartBar';




const chartOptions = {
  title: {
    text:'Tendência'
  },
  tooltip:{
    enabled:false
  },
  series: [{
    data: [7,8,9],
  },
  {
    data: [1,6,5],
  },
  {
    data: [7,2,3],
  }],
}



//colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
//'#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a']

const chartOptionsBar = {
  chart: {
    type: 'column',
    borderRadius: 5
},
  title: null,
  legend: {
    enabled:false
  },
  plotOptions:{
    column:{
      borderRadius: 5
    }
  },
  tooltip:{
    enabled:false
  },
  caption:null,
  xAxis:[{labels:{enabled:false}, }],
  yAxis:[{title:{enabled:false},labels:{
    formatter: function() {
    return this.value + '%';
  }} }],
  series: [{
    data: [
      {
        y: 90,
        color:'#1890FC'
      },
      {
          y: 75,
          color: '#1FC2C2'
      },
      {
          y: 70,
          color: '#52C422'
      },
      {
          y: 60,
          color: '#A0D92A'
      },
      {
          y: 10,
          color: '#FADB31'
      },
      {
          y: 15,
          color: '#FAAD29'
      },
      {
          y: 35,
          color: '#FA8C24'
      },
      {
          y: 39,
          color: '#FA541E'
      },
      {
          y: 39,
          color: '#F5222D'
      }
  ],

  }]
}

const data = [1,2,3,4,5];


/**
 * @exports
 * @function
 * @components HomeScreen
 * @param {string} id
 * @namespace screens screens/Workflow
 *
 * @description
 * Responsável pela página de montagem do workflow.
 */
export const ChartPage: React.FC = () => (
  <>
    <ChartLine options={chartOptions} highcharts={Highcharts} />
    <div>
    <ChartBar  options={chartOptionsBar} highcharts={Highcharts}/>
      
    </div>
  </>
);