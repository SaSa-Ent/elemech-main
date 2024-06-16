import React from 'react';
import Navbar from '../Navbar/Navbar'; // Adjust the import path as necessary
import './hero.css';
import heroImage from '../../assets/Rectangle 8.png';

const Hero = () => {
  return (
    <div className="hero-container">
      <Navbar /> {/* Navbar inside the Hero component */}
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome To Elemech </h1>
        <p>Elemech has started from its humble beginnings towards being one of the most preferred integrators in the field of Fire Fighting, Surveillance, Access Control and Building Automation</p>
        </div>
    </div>
  );
}

export default Hero;
