import React from 'react'

function FrontEnd() {
  return (
    <div className='p-4'>
      <h6><button className='btn btn-primary'>Web Development</button></h6>
      <h1>Frontend Development with ReactJS</h1>
      <ul className='list-inline mb-0'>
        <li className='list-inline-item h6 me-3 mb-1 mb-sm-0'>
            <i class="bi bi-mortarboard-fill text-danger"></i>&nbsp;
            1k Enrolled
        </li>
        <li className='list-inline-item h6 me-3 mb-1 mb-sm-0'>
            <i class="bi bi-bar-chart-fill text-success"></i>&nbsp;
            All Levels
        </li>
        <li className='list-inline-item h6 me-3 mb-1 mb-sm-0'>
            <i class="bi bi-patch-exclamation-fill text-danger"></i>&nbsp;
            Last Updated On
        </li>
        <li className='list-inline-item h6 me-3 mb-1 mb-sm-0'>
            <i class="bi bi-globe text-info"></i>&nbsp;
            English,Telugu,Hindi
        </li>
      </ul>
    </div>
  )
}

export default FrontEnd
