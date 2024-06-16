import React, { useState } from 'react';
import './footer.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  const [isToggled, setIsToggled] = useState(false);

  const handleExistingClick = () => {
    setIsToggled(false);
  };

  const handleNewClick = () => {
    setIsToggled(true);
  };

  return (
    <div className='footer-container'>
      <div className="footer-container-top">
        <h4>PROFESSIONAL SECURITY CARE</h4>
        <h1>Contact Us</h1>
      </div>
      <div className="button-container">
        <button className={`toggle-button ${!isToggled ? 'active' : ''}`} onClick={handleExistingClick}>Contact Info</button>
        <button className={`toggle-button ${isToggled ? 'active' : ''}`} onClick={handleNewClick}>Service Enquiry</button>
      </div>
      {isToggled ? (
        <div className='toggle-container'>
          <form className='enquiry-form'>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' name='name' required />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' required />
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>Phone</label>
              <input type='tel' id='phone' name='phone' required />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea id='message' name='message' rows='4' required></textarea>
            </div>
            <button type='submit' className='submit-button'>Submit</button>
          </form>
        </div>
      ) : (
        <div className='existing-container'>
          <div className="tab-content">
            <div className="row">
              <div className="col">
                <div className="info-item">
                  <FaMapMarkerAlt className="icon" />
                  <p>Address</p>
                  <h3>123, Main Street, City, Country</h3>
                </div>
              </div>
              <div className="col">
                <div className="info-item">
                  <FaPhone className="icon" />
                  <p>Phone</p>  
                  <h3>+91 9876543210</h3>
                </div>
              </div>
              <div className="col">
                <div className="info-item">
                  <FaEnvelope className="icon" />
                  <p>Email</p>
                  <h3>info@example.com</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="social-media">
            <h3>Follow us on social media</h3>
            <div className="social-icons">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
