import React from 'react'
import Buttons from './Buttons'
import { MdContactPage } from 'react-icons/md'
import styled from "styled-components";
import { AiFillProject } from 'react-icons/ai'


export default function Welcome1() {
    return (

        <WelcomeConainer>
            <h6>Hola, soy Jorge</h6>
            <h1>Desarrollador Front End</h1>
            <h6 className='bold-text'>Bienvenido a mi portafolio.</h6>
            <div className='buttons'>
                <Buttons to=''
                    Bcolor={'#213747'}
                    text={`Hoja de vida`}
                    icon={<MdContactPage className='icon1-color' />}
                    tcolor={'#1DC9E0'}
                    border={'solid'} />
                <Buttons to=''
                    Bcolor={'#1DC9E0'}
                    text={`Proyectos`}
                    icon={<AiFillProject className='icon2-color' />}
                    tcolor={'#ffffff'}
                    border= {'none'} />
            </div>
        </WelcomeConainer>
    )
}
const WelcomeConainer = styled.div`
.icon1-color{
    color: #03BDF8;
}
.buttons {
    display: flex;
    gap: 2rem;
}
h6{
    font-size: 1.5rem;
    margin: 20px 0;
}
h1{
    font-size: 3rem;
}
`