import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

const PacketsSentChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['01:52 PM', '02:10 PM', '02:28 PM', '02:48 PM'],
    datasets: [
      {
        label: 's24x7-w2kBr2.site24x7.com',
        data: [0, 1000, 0, 2000],
        borderColor: '#16c79a',
        fill: false,
      },
    ],
  })

  return (
    <div className='chart-packets__container'>
      <h3>Packets Sent</h3>
      <div className='chart__packets-sent'>
        <Line
          data={chartData}
          width={400}
          height={220}
          backgroundColor='white'
          options={{
            title: {
              display: true,
              text: 'Packets',
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
                    stepSize: 1000,
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

export default PacketsSentChart
