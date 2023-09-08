import React from 'react'
import '../Styles/AboutSection.css'
import Description from './Description.jsx'
import Skills from './Skills'

function AboutSection() {
    return (
        <div className='about-section'id='about'>
            <Description/>
            <Skills/>
        </div>
    )
}

export default AboutSection