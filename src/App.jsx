import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AirconMaintenance from './pages/AirconMaintainence';
import Brand from './pages/Brand';
import Clients from './pages/Clients';
import News from './pages/News';
import Contact from './pages/Contact';
import Header from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      
      <div className="app">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aircon-maintenance" element={<AirconMaintenance />} />
            <Route path="/brands" element={<Brand />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      
      </div>
    </Router>
  );
};

export default App;
