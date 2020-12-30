import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

const DBResponseTimeChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['02:11 PM', '02:23 PM', '02:35 PM', '02:47 PM'],
    datasets: [
      {
        label: 'select',
        data: [0, 50, 5, 1],
        borderColor: '#16c79a',
        fill: false,
      },
      {
        label: 'insert',
        data: [0, 10, 5, 0],
        borderColor: '#11698e',
        fill: false,
      },
    ],
  })

  return (
    <div className='chart-dbresponse__container'>
      <h3>DataBase Response Time</h3>
      <div className='chart__dbresponse-time'>
        <Line
          data={chartData}
          width={400}
          height={225}
          backgroundColor='white'
          options={{
            title: {
              display: true,
              text: 'Response Time(ms)',
              fontSize: 18,
              position: 'left',
            },
            maintainAspectRatio: false,
            elements: {
              line: {
                tension: 0, // disables bezier curves
              },
              point: {
                radius: 0,
              },
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    stepSize: 50,
                  },
                },
              ],
            },
            legend: {
              display: true,
              position: 'bottom',
              align: 'start',

              labels: {
                fontColor: '#000',
                boxWidth: 15,
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

export default DBResponseTimeChart
