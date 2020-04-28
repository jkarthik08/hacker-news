import React, { useEffect, useContext, useRef } from 'react';
import { StateContext } from '../reducers/state';

const UpvotesChart = () => {
  const state = useContext(StateContext);
  const feeds = state.hits;

  const arrData = [];
  feeds.forEach(feed => {
    if (!feed.hidden)
      arrData.push(feed.points);
  });
  const arrX = [];
  feeds.map(feed => {
    if (!feed.hidden)
      arrX.push(feed.objectID);
  });
  const chartRef = useRef();

  useEffect(() => {
    try {
      chartRef.current = Highcharts.chart('chart', {
        title: {
          text: ''
        },
        xAxis: {
          categories: arrX
        },
        yAxis: {
          title: {
            text: 'Points'
          }
        },
        legend: false,
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            }
          }
        },
        series: [{
          name: '',
          data: arrData
        }],
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      });
    }
    catch (e) {
      console.error('Highcharts not in node');
    }
  }, []);

  if (chartRef.current && arrData)
    chartRef.current.series[0].setData(arrData);

  return <div id='chart'></div>;
};

export default UpvotesChart;
