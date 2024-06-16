import React from 'react';
import './Home.css';
import Homesection from '../pages/Homesection';
import Footer from '../components/Footer';
import Hero from '../pages/Hero';
import Homesection2 from '../pages/Homesection2';

const Home = () => {
  return (
    <body>
   <Hero/>
    <Homesection/>
    <Homesection2/>
    <Footer/>
    </body>
    
   

  );
};

export default Home;
