import React from 'react';
import Footer from '../components/Footer'
import './About.css'
import design3 from '../assets/Group 3.png'
import img1 from '../assets/Rectangle 15.png'
import img2 from '../assets/Rectangle 16.png'
const About = () => {
  return (
    <body>
    <div className="home-container1">
      <h1>ABOUT US</h1>
    </div>
    <div className='desc'>
      <p >Lead by Mr. Sujeet M. Ambre and Mr. Nilesh Jadhav with over two decades of rich and wide expertise in the Fire industry, Elemech has started from its humble beginnings towards being one of the most preferred integrators in the field of Fire Fighting, Surveillance, Access Control and Building Automation</p>
    </div>
    <div className="photocol">
      <img src={design3} alt="" className='pcitem'/>
      <img src={img1} alt="" className='pcitem'/>
      <img src={img2} alt="" className='pcitem'/>
    </div>
    <div className="team">
      <h3>OUR TEAM</h3>
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <Footer/>
    </body>
  );
};

export default About;
