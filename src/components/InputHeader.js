import React from 'react'

const InputHeader = () => {
  return (
    <div className='inputHeader'>
      <span style={{ color: '#16c79a', fontSize: '30px' }}>&larr;</span>
      <input type='text' />
      <button>
        <i className='fas fa-th-large'></i> Edit Dashboard
      </button>
      <p>
        <i className='fas fa-circle-notch'></i> Last Updated{' '}
        <span style={{ fontWeight: 'bold' }}>45 second ago</span>
      </p>

      <button>
        <i className='fas fa-laptop'></i> Share This
      </button>

      <button>Raw Hour</button>
      <select name='Widget Level Period'>
        <option value='Widget Level Period'>Widget Level Period</option>
      </select>
    </div>
  )
}

export default InputHeader
