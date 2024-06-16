import React, { useState } from 'react';
import './sidebar.css';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className='sidebar-toggle' onClick={toggleSidebar}>
        <i className="fas fa-bars"></i>
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Aircon Maintenance</li>
          <li>Brands</li>
          <li>Clients</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
