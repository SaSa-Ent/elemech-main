import React from 'react';
import { Link ,useLocation} from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/logo.png';
import { IoIosMenu } from "react-icons/io";
const Navbar = () => {
    const location = useLocation();
  return (
    <>
    <nav>
      <ul>
        <li><Link to='/'><img src={Logo} className="logo"alt="elemech logo" /></Link></li>
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Link></li>
        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>ABOUT</Link></li>
        <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>SERVICES</Link></li>
        <li><Link to="/aircon-maintenance" className={location.pathname === '/aircon-maintenance' ? 'active' : ''}>AIRCON MAINTAINENCE</Link></li>
        <li><Link to="/clients" className={location.pathname === '/clients' ? 'active' : ''}>CLIENTS</Link></li>
        <li><Link to="/news" className={location.pathname === '/news' ? 'active' : ''}>NEWS</Link></li>
        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>CONTACT</Link></li>
        <li className="menu-icon"><Link to="#"><IoIosMenu/></Link></li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
