import React from 'react'

const MonitorChart = () => {
  return (
    <div className='chart-monitor__container'>
      <h3>
        Monitors in Monitor Type Of Server Monitor{' '}
        <span style={{ color: 'red', fontSize: '10px' }}>Live </span>
      </h3>
      <div className='chart__monitor-io'>
        <div style={{ backgroundColor: '#16c79a' }}></div>
        <div style={{ backgroundColor: '#16c79a' }}></div>
        <div style={{ backgroundColor: '#e79e4f' }}></div>
        <div style={{ backgroundColor: '#ef4f4f' }}></div>
        <div style={{ backgroundColor: '#16c79a' }}></div>
        <div style={{ backgroundColor: '#ef4f4f' }}></div>
        <div style={{ backgroundColor: '#16c79a' }}></div>
        <div style={{ backgroundColor: '#ef4f4f' }}></div>
        <div style={{ backgroundColor: '#16c79a' }}></div>
      </div>
    </div>
  )
}

export default MonitorChart
