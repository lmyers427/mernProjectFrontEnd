import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    {/* {Protected header } */}
    <Header/>
     {/* {Container for Dashboard} */}
    <div >
        <Outlet />
    </div>
    
    </>
  )
}

export default Home
