import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

const ResponseTimeChart = () => {
  const [chartData, setChartData] = useState({
    labels: [
      '01:49 PM',
      '02:08 PM',
      '02:17 PM',
      '02:26 PM',
      '02:35 PM',
      '02:53 PM',
      '03:02 PM',
    ],
    datasets: [
      {
        label: 's24x7-w2kBr2.site24x7.com',
        data: [1000, 2000, 1000, 5000, 2000, 1000, 2000],
        backgroundColor: '#16c79a',
      },
    ],
  })

  return (
    <div className='chart-cpu__container'>
      <h3>Response Time</h3>
      <div className='chart__cpu-utilization'>
        <Line
          data={chartData}
          width={550}
          height={490}
          options={{
            title: {
              display: true,
              text: 'Response Time(ms)',
              fontSize: 18,
              position: 'left',
            },
            maintainAspectRatio: false,
            elements: {
              point: {
                radius: 0,
              },
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    suggestedMax: 6000,
                  },
                },
              ],
            },
            legend: {
              display: false,
              position: 'bottom',

              labels: {
                fontColor: '#000',
              },
            },
            layout: {
              // padding: {
              //   top: 10,
              //   left: 50,
              //   bottom: 10,
              //   right: 80,
              // },
            },
          }}
        />
      </div>
    </div>
  )
}

export default ResponseTimeChart
