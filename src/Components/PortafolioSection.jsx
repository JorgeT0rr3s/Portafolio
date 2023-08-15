import React from 'react'
import Cards from './Cards'
import '../Styles/PortafolioSection.css'

function PortafolioSection() {
  return (
    <div className='portafolio-section'>
        <h1>Portafolio</h1>
        <Cards/>
        <Cards/>
    </div>
  )
}

export default PortafolioSection