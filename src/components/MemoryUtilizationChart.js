import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

const MemoryUtilizationChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['02:06 PM', '02:21 PM', '02:36 PM', '02:51 PM', '03:06 PM'],
    datasets: [
      {
        label: 's24x7-w2kBr2.site24x7.com',
        data: [40, 40, 40, 41, 40],
        borderColor: '#16c79a',
        fill: false,
      },
      {
        label: 'site24x7-win2012.site24x7.com',
        data: [90, 90, 90, 90, 90],
        borderColor: '#54e346',
        fill: false,
      },
      {
        label: 'dpadmin2010.myadmin.local',
        data: [93, 92, 93, 92, 93],
        borderColor: '#11698e',
        fill: false,
      },
    ],
  })

  return (
    <div className='chart-memory__container'>
      <h3>Memory Utilization</h3>
      <div className='chart__memory-utilization'>
        <Line
          data={chartData}
          width={400}
          height={220}
          backgroundColor='white'
          options={{
            title: {
              display: true,
              text: 'Memory Utilization(%)',
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
export default MemoryUtilizationChart
