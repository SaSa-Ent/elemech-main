import React from 'react'
import './Why.css'
import Why1 from '../../assets/Why1.png'
import Why2 from '../../assets/Group 1.png'


const Why = () => {
  return (
<div className='Why-us'>    
    <div className='Why'>
      <div className='Why__img'>
      <img className='Why__img-1' src={Why1} alt=""/>
      <img className='Why__img-2' src={Why2} alt=""/>
      </div>
      </div>
        <div className='why-container'>
        <h3>PROFESSIONAL SECURITY SERVICES</h3>
        <h1>Why Choose Elemech</h1>
        <div className="Card-container-1">
            <div className="Why__card">
                <img src="" alt="" />
                <h2>Strong Technological</h2>

            </div>
            <div className="Why__card">
                <img src="" alt="" />
                <h2>24/7 Availability</h2>
            </div>
            </div>
            <div className="Card-container-2">
            <div className="Why__card">
                <img src="" alt="" />
                <h2>Complete IBMS Solution</h2>
            </div>
            <div className="Why__card">
                <img src="" alt="" />
                <h2>Deliver Quality</h2>
            </div>
        </div>
        </div>
    
</div>
  )
}

export default Why
