import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

const ErrorRateChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['01:58 PM', '02:12 PM', '02:26 PM', '02:40 PM'],
    datasets: [
      {
        label: 's24x7-w2kBr2.site24x7.com',
        data: [0, 3, 0, 4, 0, 4, 0, 3],
        backgroundColor: '#16c79a',
      },
    ],
  })

  return (
    <div className='chart-error__container'>
      <h3>Error Rate(%)</h3>
      <div className='chart__error-rate'>
        <Line
          data={chartData}
          width={400}
          height={220}
          backgroundColor='white'
          options={{
            title: {
              display: true,
              text: 'Count',
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
                    stepSize: 2,
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

export default ErrorRateChart
