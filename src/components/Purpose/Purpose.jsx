import React from 'react'
import './purpose.css'
import Purpose from '../../assets/Purpose.png'
import why2 from '../../assets/Group 1.png'
const purpose = () => {
  return (
    <div className='purpose-container'>
        <div className="purpose-container-1">
            <h1>Purpose</h1>
        </div>
        <div className="purpose-container-2">
          <div className="purpose-container-3">
            <img src={Purpose} alt="Purpose" />
          </div>
          <div className="purpose-container-4">
           <h3>Tried, Tested & Proven Security Services</h3> 
           <img src={why2} alt="Purpose" />
          <button><a href='#'>ENQUIRY</a></button> 
          </div>
        </div>

    </div>

  )
}

export default purpose