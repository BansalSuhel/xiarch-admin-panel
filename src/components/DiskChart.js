import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

const DiskChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['01:50 PM', '02:07 PM', '02:24 PM', '02:41 PM'],
    datasets: [
      {
        label: 'Disk Reads',
        data: [0, 15, 10, 20],
        backgroundColor: '#16c79a',
      },
      {
        label: 'Disk Writes',
        data: [15, 2, 20, 25],
        backgroundColor: '#54e346',
      },
    ],
  })

  return (
    <div className='chart-disk__container'>
      <h3>Disk(I/O)</h3>
      <div className='chart__disk-io'>
        <Line
          data={chartData}
          width={400}
          height={225}
          backgroundColor='white'
          options={{
            title: {
              display: true,
              text: 'Bytes Per Second',
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

export default DiskChart
