import React from 'react'
import Photo from './Photo'
import Welcome from './Welcome'
import '../Styles/HeroSection.css'


function HeroSection() {
    return (
        <div className='hero-section'>
            <Welcome />
            <Photo />
        </div>
    )
}

export default HeroSection