import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png.png'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt="" />
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li>About</li>
            <li> <Link to ="/services">Services</Link></li>
            <li>Aircon Maintenance</li>
            <li>Brands</li>
            <li>Clients</li>
            <li>News</li>
            <li>Contact</li>
        </ul>
        <Sidebar/>
    </nav>
  )
  
}

export default Navbar
