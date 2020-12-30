import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

const ThroughputChart = () => {
  const [chartData, setChartData] = useState({
    labels: [
      '01:50 PM',
      '02:13 PM',
      '02:27 PM',
      '02:41 PM',
      '02:55 PM',
      '03:02 PM',
    ],
    datasets: [
      {
        label: 's24x7-w2kBr2.site24x7.com',
        data: [10, 5, 9, 4, 6, 2],
        backgroundColor: '#16c79a',
      },
    ],
  })

  return (
    <div className='chart-throughput__container'>
      <h3>Throughput</h3>
      <div className='chart__throughput'>
        <Line
          data={chartData}
          width={400}
          height={225}
          backgroundColor='white'
          options={{
            title: {
              display: true,
              text: 'Throughput(rpm)',
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
                    stepSize: 5,
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

export default ThroughputChart
