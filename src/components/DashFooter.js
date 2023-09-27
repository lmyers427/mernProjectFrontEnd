import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse }  from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from 'react-router-dom'

const DashFooter = () => {

    const navigate = useNavigate()
    const {pathname} = useLocation()

    const onGoHomeClicked = () => navigate('/dash')

    let goHomeButton = null
    if (pathname !== '/dash') {
        goHomeButton = (
            <button 
            className=''
             title="Home"
             onClick={onGoHomeClicked}
            >
             <FontAwesomeIcon icon={faHouse} />  

            </button>
        )
    }

  return (
    <div className="text-gray-300">
      <footer>
        {goHomeButton}
        <p>Current User:</p>
        <p>Status:</p>
      </footer>
    </div>
  )
}

export default DashFooter
