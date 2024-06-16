import React from 'react';
import './card.css';
import fire from '../../assets/Vector 1.png';
import img1 from '../../assets/Rectangle 33.png';
import img2 from '../../assets/Rectangle 35.png';
import img3 from '../../assets/Rectangle 36.png';
import group from '../../assets/Group 7.png';

const Card = () => {
    return (

        <div className='card'>
            
            <div className='content'>
                <p>Professional Security Services</p>
                <h3>Fire Fighting System</h3>
            </div>
            <div className='fire'>
                <img src={fire} alt="fire" />
            </div>
            <div className='Card-container'>
              
                
                <div className='card-1'>
                    <div className='card-content'>
                        <h3>Automatic water <br /> 
                        sprinkler system</h3>
                    </div>
                    <div className='card-img'>
                        <img src={img1} alt="fire" />
                    </div>
                    <div className='card-button'>
                        <button>Click me</button>
                    </div>
                </div>

                <div className='card-2'>
                    <div className='card-content'>
                        <h3>Fire Hydrant <br /> system</h3>
                    </div>
                    <div className='card-img'>
                        <img src={img2} alt="fire" />
                    </div>
                    <div className='card-button'>
                        <button>Click me</button>
                    </div>
                </div>
                <div className='card-3'>
                    <div className='card-content'>
                        <h3>Gas Suppression <br /> System</h3>
                    </div>
                    <div className='card-img'>
                        <img src={img3} alt="fire" />
                    </div>
                    <div className='card-button'>
                        <button>Click me</button>
                    </div>
                </div>
                
            </div>
            <div className='group'>
                <img src={group} alt="group" />
                </div>
        </div>
    );
};
export default Card;