import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';








const Layout = () => {
  return (

    <div>

      <marquee className="text-blue-600  hover:text-green-500 font-bold  text-3xl" >INTERN MANAGEMENT SYSTEM</marquee>
      <nav className="bg-teal-300  mt-5 hidden md:flex">
        <div className="container mx-auto flex items-center p-2  justify-between">
          <div className='flex'>
            <img src={require('./logo.png')} className='w-20' alt=" no logo" />
            <Link to="#" className="text-black mt-5 text-3xl font-semibold hover:text-fuchsia-500 focus: text-black">INTERNS HUB</Link>
          </div>
          <div className=" flex space-x-4">
            <Link to="/dashboard" className="text-red-500 p-2  text-2xl font-bold hover:text-black  focus:  text-black">Dashboard</Link>
            <Link to="/add Interns" className="text-yellow-500 p-2  text-2xl font-bold hover:text-black focus:  text-black">Interns</Link>
            <Link to="/status" className="text-violet-500 p-2  text-2xl font-bold hover:text-black  focus:  text-black">Status</Link>

          </div>
        </div>

      </nav>


      <nav className="bg-teal-300 items-center flex justify-between md:hidden ">


        <div className="" id="mobile-menu justify-between">

          <div className='container mx-auto  p-2 md:hidden   justify-end flex  items-end'>
            <Link to="#" className="text-black   text-2xl font-semibold hover:text-orange-500  focus: text-black">Intern Hub</Link>
            <IconButton className=" flex  text-right justify-end " aria-label="menu" size="large" >
              <MenuIcon />
            </IconButton>



          </div>

          <div className=" flex  flex-col mx-4 bg-whitespace-x-4">
            <Link to="/dashboard" className="text-red-500 p-2  font-bold hover:text-fuchsia-500  focus:  text-black">Dashboard</Link>
            <Link to="/add Interns" className="text-red-500 p-2 font-bold hover:text-fuchsia-500  focus:  text-black">Add Interns</Link>
            <Link to="/status" className="text-red-500 p-2 font-bold hover:text-fuchsia-500  focus:  text-black">Status-</Link>

          </div>
        </div>

      </nav>



      <Outlet />
    </div>
  )
}

export default Layout;
