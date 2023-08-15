import React from 'react';
import './App.css';
import AboutSection from './Components/AboutSection';
import HeroSection from './Components/HeroSection';
import NavBar from './Components/NavBar';
import PortafolioSection from './Components/PortafolioSection';

export default function App() {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <AboutSection/>
    <PortafolioSection/>
    </>
  )
}
