import React from 'react'
import Hero from './components/hero/Hero'
import Why from './components/Why/Why'
import Purpose from './components/Purpose/Purpose'
import Footer from './components/Footer/Footer'
import SliderLogo from './components/slider-logo/Slider'
const Homepage = () => {
  return (
    <div>
     <Hero/>
        <Why/>
        <Purpose/>
        <SliderLogo/>
        <Footer/>
    </div>
  )
}

export default Homepage