import React from 'react'
import './Homesection2.css'
import image1 from '../assets/Rectangle 11.png'
const Homesection2 = () => {
    return(
    <>
    <h2 style={{color:"#ff0000"}}>PURPOSE</h2>
    <br />
    <br />
    <br />
    <div className="first">
        <div>
            <img src={image1} alt="" />
        </div>
        <div className='right'>
            
            <h2>Tried , Tested & Proven Security        <br/> Services</h2>
            <button>Enquiry</button>
        
        </div>
    </div>
    <div className="secound">
        <h3>CLIENTS</h3>
        <div className="boxes">
            <div className='boxitem'>
                <p className='headitem' style={{color:"black"}}>MQL-HYDERABAD</p>
                <p>System: Access ControL System</p>
            </div>
            <div className='boxitem'>
                <p className='headitem' style={{color:"black"}}>GEMS TOURS AND TRAVEL</p>
                <p>System: Fire and security</p>
            </div>
            <div className='boxitem'>
                <p className='headitem' style={{color:"black"}}>KHAITAN & COMPANY</p>
                <p>System: Fire and Security</p>
            </div>
        </div>
    </div>
    </>
)
}
export default Homesection2