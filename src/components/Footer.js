import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from "react-router-dom"

const Footer = () => {


  const navigate = () => {
    const {pathname} = useLocation()
  }

  const GoHomeClicked = () => navigate('/home')

  let goHomeButton = null
  if(pathname !== '/home') {
    goHomeButton = (
        <button
        className=""
        title="Home" 
        onClick={goHomeButton}
        >

            <FontAwesomeIcon icon={faHouse} />

      </button>
    )
  }
  
  const content = (
        <footer>
            {goHomeButton}
            <p>Current User:</p>
            <p>Status:</p>
        </footer>
  )
  
  
    return content
}

export default Footer
