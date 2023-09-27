import React from 'react'
import { Link } from 'react-router-dom'

const DashHeader = () => {
  return (
    <div className='text-grey-300'>
        <h1>This is the Dash Header</h1>
        <Link to="/dash">
            <h1>IfixPhones</h1>
        </Link>
        <nav>
            {/* {Add nav buttons later} */}
        </nav>
      
    </div>
  )
}

export default DashHeader
