import React from 'react';
import Navbar from '../Navbar/Navbar'; // Adjust the import path as necessary
import './hero1.css';
import heroImage from '../../assets/Rectangle 12.png';

const Hero = () => {
  return (
    <div className="hero-container">
      <Navbar /> {/* Navbar inside the Hero component */}
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="hero">
        <h1>Services</h1>
       
        </div>
    </div>
  );
}

export default Hero;
