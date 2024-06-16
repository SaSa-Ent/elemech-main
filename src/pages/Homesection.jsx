import "./Homesection.css"
import React from 'react'
import left from "../assets/Rectangle 9.png"
import leftdesign from "../assets/Group1.png"
import Footer from '../components/Footer';
import settings from '../assets/Vector.png'
import clock from "../assets/Vector (1).png"
import thumbsup from "../assets/Vector (2).png"
import laptop from "../assets/Vector (3).png"
const homesection = () => {
  return (
    <div class="container">
        <div class="left-section">
          <div className='stackitem top'>
          <img src={left} alt="" className='left'/>
           </div>       
           <div className='stackitem bottom'>
           <img src={leftdesign} className='left design'/>      
           </div>  
        </div>
        <div class="right-section">
           <div className="grid-item"></div>
            
        <div class="grid-item">
                <p>PROFESSIONAL SECURITY SERVICES</p>
                <p>Why Choose Elemch</p>
            </div>
            <div class="grid-item">
                <img src={settings} alt="" />
                <p>Strong Technologies</p>
            </div>
            <div class="grid-item">
            <img src={clock} alt="" />
            <p>Strong Technologies</p>
            </div>
            <div class="grid-item">
            <img src={thumbsup} alt="" />
            <p>Strong Technologies</p>
            </div>
            <div class="grid-item">
            <img src={laptop} alt="" />
            <p>Strong Technologies</p>
            </div>
        </div>
    </div>
  )
}

export default homesection