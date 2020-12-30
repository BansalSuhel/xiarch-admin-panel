import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

const PacketsRecievedChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['01:52 PM', '02:10 PM', '02:28 PM', '02:46 PM', '03:04 PM'],
    datasets: [
      {
        label: 's24x7-w2kBr2.site24x7.com',
        data: [50000, 70000, 50000, 100000, 50000],
        borderColor: '#16c79a',
        fill: false,
      },
    ],
  })

  return (
    <div className='chart-packetsRecieved__container'>
      <h3>Packets Recieved</h3>
      <div className='chart__packets-recieved'>
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
                    stepSize: 50000,
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

export default PacketsRecievedChart
