import React from 'react';
import Highcharts from 'highcharts/highstock'

import HighchartsExporting from 'highcharts/modules/exporting'
import ChartLine from '@screens/Home/components/ChartLine';
import ChartBar from '@screens/Home/components/ChartBar';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts)
}

const chartOptions = {

  title: {
    text:'Tendência'
  },
  legend: {
    enabled:false
  },
  tooltip:{
    enabled:false
  },
  xAxis: {
    type: 'datetime'
},
  yAxis: {
    title: {
      enabled:false
    }
},
plotOptions: {
  series: {
      marker: {
          enabled: false
      },
      states: {
        hover: {
            enabled: false
        }
    }
  }
},

  series: [{
    data: [
      [Date.UTC(1970, 10, 25), 0],
      [Date.UTC(1970, 10, 26), 1],
      [Date.UTC(1970, 10, 27), 4],
    ],
  },
  {
    data: [
      [Date.UTC(1970, 10, 25), 0],
      [Date.UTC(1970, 10, 26), 1],
      [Date.UTC(1970, 10, 27), 3],
    ],
  },
  {
    data: [
      [Date.UTC(1970, 10, 25), 0],
      [Date.UTC(1970, 10, 26), 2],
      [Date.UTC(1970, 10, 27), 3],
    ],
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
  
  </>
);