import {Link} from 'react-router-dom'
const Header = () => {
  const content = (
    <header>
        <div>
            <Link to="/home/notes">
                <h1>Tickets</h1>
            </Link>
            <nav>
                {/* {Add navigation later} */}
            </nav>
        </div>
    </header>
  )

  return content
}

export default Header
