import './Footer.css'

import React from 'react';

const Footer = () => {
  return (
  
    <footer className="footer">
      <div className="containerf">
        <p className='head'>PROFESSIONAL SECURITY CARE</p>
        <p style={{fontSize:"50px"}}>Contact Us</p>
        <br />
        
        <div className="options">
            <div>CONTACT INFO</div>
            <div>SERVICE ENQUIRY</div>
        </div>
        <br />
        <p>get in touch with us</p>
        <br />
        <div className="timeline">
            <div>address</div>
            <div>phone</div>
            <div>email</div>
        </div>
      </div>
      <br />
      <br /><br />
      <div className="copyright">
        <p>© {new Date().getFullYear()} - PROFESSIONAL SECURITY CARE</p>
      </div>
    </footer>
    
  );
};

export default Footer;
