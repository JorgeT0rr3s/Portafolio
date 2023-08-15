import React from 'react'
import styled from "styled-components";

function Skills() {
    return (
        <SkillsContainer>
            <div className='container'>
                <div className='exp-education'>
                    <h3>Experiencia laboral:</h3>
                    <ul>
                        <li className='li-flex' >  Jefe de ingenieria </li>
                        <span >Nicomar Electronics <br /> 2021-2023 </span>


                        <li className='li-flex' >Ingeniero de soporte </li>
                        <span >Nicomar Electronics <br /> 2019-2021 </span>


                    </ul>
                    <h3>Educación:</h3>
                    <ul>
                        <li className='li-flex' > Desarrollador Frontend </li>
                        <span >Programate Academy / Educamás <br /> 2023-2023 </span>

                        <li className='li-flex' >Ingeniero en control y Automatización </li>
                        <span >Universidad Distrital Francisco Jose de Caldas <br /> 2018-Actualmente </span>
                    </ul>

                </div>
                <div className='tecnologies'>
                    <h3>Tecnologías</h3>

                </div>
            </div>

        </SkillsContainer>
    )
}

export default Skills

const SkillsContainer = styled.div`
    .container{
        display: flex;
        
    }

    h3, li{
        color: white;
    }

    span{
        color: #ffffff88;
    }
    .tecnologies{
        padding: 0 3rem ;
    }
`