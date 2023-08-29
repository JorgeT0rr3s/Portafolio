import React from 'react'
import styled from "styled-components";
import { BiLogoHtml5 } from 'react-icons/bi'
import { BiLogoCss3 } from 'react-icons/bi'
import { BiLogoJavascript } from 'react-icons/bi'
import { BiLogoReact } from 'react-icons/bi'
import { BiLogoNodejs } from 'react-icons/bi'

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
                    <div className='tec-container'>
                        <div className='hover-div html-logo'> <BiLogoHtml5 /> </div>
                        <div className='hover-div css-logo'> <BiLogoCss3 /> </div>
                        <div className='hover-div js-logo'> <BiLogoJavascript /> </div>
                        <div className='hover-div react-logo'> <BiLogoReact /> </div>
                        <div className='hover-div nodejs-logo'> <BiLogoNodejs /> </div>
                    </div>

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

    .tec-container{
        display: flex;
        gap: 1rem
        
    }
    .hover-div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    width: 4.1rem;
    height: 4.1rem;
    margin: 10px;
    background-color: transparent;
    border-radius: 0 0 5px 5px;
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    .hover-div:hover {
    transform: scale(1.2);

    }
    .html-logo{
        color: #E34F26;
    }
    .html-logo:hover {
        box-shadow: 0px 5px 3px #E34F26;
        border: 1px  solid #E34F26;
        border-top: none;
    }
    .css-logo{
        color: #1572B6;
    }
    .css-logo:hover {
        box-shadow: 0px 5px 3px #1572B6;
        border: 1px  solid #1572B6;
        border-top: none;
    }

    .js-logo{
        color: #F7DF1E;
    }
    .js-logo:hover {
        box-shadow: 0px 5px 3px #F7DF1E;
        border: 1px  solid #F7DF1E;
        border-top: none;
    }
    .react-logo{
        color: #61DAFB;
    }
    .react-logo:hover {
        box-shadow: 0px 5px 3px #61DAFB;
        border: 1px  solid #61DAFB;
        border-top: none;
    }
    .nodejs-logo{
        color: #68A063;
    }
    .nodejs-logo:hover {
        box-shadow: 0px 5px 3px #68A063;
        border: 1px  solid #68A063 ;
        border-top: none;
    }

`