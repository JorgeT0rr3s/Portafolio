import React from 'react'
import Cards from './Cards'
import '../Styles/PortafolioSection.css'
import ProjectsData from '../Databases/Projects'

function ProjectSection() {

  
  return (
    <div className='portafolio-section' id='proyectos'>
      
      <h2>Proyectos</h2>
      <div className='cards-container'>
      {ProjectsData.map ((data) => (
        <Cards 
            key= {data.item}
            title={data.title}
            imagen={data.image}
            description={data.Description}
            linkGit={data.repository}
            link={data.link}


        />
      ))}
      </div>
      
    </div>
  )
}

export default ProjectSection;