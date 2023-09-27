import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";

import React from 'react'

const DashLayout = () => {
  return (
    <div className="text-gray-300">
    <DashHeader/>
    <h1 className="text-xl">This is the DashLayout Page</h1>
    <div >
        <Outlet />
    </div>
    <DashFooter/>
    

    </div>
   
  )
}

export default DashLayout
