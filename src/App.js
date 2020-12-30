import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import CpuUtilizationChart from './components/CpuUtilizationChart'
import MemoryUtilizationChart from './components/MemoryUtilizationChart'
import PacketsSentChart from './components/PacketsSentChart'
import MonitorChart from './components/MonitorChart'
import DiskChart from './components/DiskChart'
import ErrorRateChart from './components/ErrorRateChart'
import DBResponseTimeChart from './components/DBResponseTimeChart'
import PacketsRecievedChart from './components/PacketsRecievedChart'
import ThroughputChart from './components/ThroughputChart'
import ResponseTimeChart from './components/ResponseTimeChart'
import SideBar from './components/SideBar'
import Header from './components/Header'
import InputHeader from './components/InputHeader'

const App = () => {
  let content
  content = (
    <>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <SideBar />

        <div
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
          }}
        >
          <InputHeader />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginLeft: '10px',
              marginRight: '5px',
            }}
          >
            <CpuUtilizationChart />

            <div>
              <MemoryUtilizationChart />
              <MonitorChart />
            </div>

            <div>
              <PacketsSentChart />
              <DiskChart />
            </div>
            <ResponseTimeChart />
            <div>
              <PacketsRecievedChart />
              <ThroughputChart />
            </div>

            <div>
              <ErrorRateChart />
              <DBResponseTimeChart />
            </div>
          </div>
        </div>
      </div>
    </>
  )
  return (
    <Router>
      <div className='App'>{content}</div>
    </Router>
  )
}

export default App
