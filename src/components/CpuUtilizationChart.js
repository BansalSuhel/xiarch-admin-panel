import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

const CpuUtilizationChart = () => {
  const [chartData, setChartData] = useState({
    labels: [
      '02:06 PM',
      '02:15 PM',
      '02:24 PM',
      '02:33 PM',
      '02:42 PM',
      '02:51 PM',
      '03:00 PM',
      '03:09 PM',
    ],
    datasets: [
      {
        label: 's24x7-w2kBr2.site24x7.com',
        data: [25, 40, 25, 80, 25, 40, 25, 40],
        borderColor: '#16c79a',
        fill: false,
      },
      {
        label: 'site24x7-win2012.site24x7.com',
        data: [30, 45, 30, 45, 55, 30, 45, 30],
        borderColor: '#54e346',
        fill: false,
      },
      {
        label: 'dpadmin2010.myadmin.local',
        data: [18, 20, 18, 20, 40, 20, 18, 20],
        borderColor: '#11698e',
        fill: false,
      },
    ],
  })

  return (
    <div className='chart-cpu__container'>
      <h3>CPU Utilization</h3>
      <div className='chart__cpu-utilization'>
        <Line
          data={chartData}
          width={550}
          height={490}
          backgroundColor='white'
          options={{
            title: {
              display: true,
              text: 'CPU Utilization(%)',
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
                    suggestedMax: 100,
                    stepSize: 20,
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

export default CpuUtilizationChart
