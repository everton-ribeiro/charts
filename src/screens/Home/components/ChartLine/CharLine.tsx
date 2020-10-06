import React from 'react'
import HighchartsReact from 'highcharts-react-official'

export const ChartLine = ({ options, highcharts }):JSX.Element => {
  return (
    <HighchartsReact
      highcharts={highcharts}
      constructorType={'chart'}
      options={options}
    />
  );
} 