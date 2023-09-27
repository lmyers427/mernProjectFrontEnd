import { Link } from "react-router-dom";


import React from 'react'

const Splash = () => {
  return (
    <div className="text-gray-300">
    <h1>This is the Splash Page </h1>
    <div>
    <Link to="/login">Employee Login</Link>
    </div>
    </div>
  )
}

export default Splash
