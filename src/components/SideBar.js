import React from 'react'

import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <Link to='/' style={{ color: 'green' }}>
            <i className='fas fa-home'></i>Home
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i className='fas fa-globe-americas'></i>Web
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i className='fas fa-skull'></i>APM
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i className='fas fa-server'></i>Server
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i className='fas fa-square'></i>VMWare
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i className='fab fa-aws'></i>AWS
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i className='far fa-caret-square-right'></i>Azure
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i className='fas fa-network-wired'></i>Network
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i className='fas fa-globe'></i>RUM
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i className='fas fa-search'></i>Applogs
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i className='fas fa-hotel'></i>Reports
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i className='fas fa-users-cog'></i>Admin
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
