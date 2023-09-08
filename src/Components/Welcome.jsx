import React from 'react'

import { MdContactPage } from 'react-icons/md'
import styled from "styled-components";
import { AiFillProject } from 'react-icons/ai'


export default function Welcome1() {
    return (

        <WelcomeConainer>
            <h6>Hola, soy Jorge</h6>
            <h1>Desarrollador Front End</h1>
            <h6 className='bold-text'>Bienvenido a mi portafolio.</h6>
            <div className='buttons-container'>
            <a href="#" className="btnfos-5 button " >
                        Curriculum
                        <MdContactPage style={{ marginLeft: '8px' }} />
                    </a>

                    <a href="#" className=" button button2"  >
                        Proyectos
                        <AiFillProject style={{ marginLeft: '8px' }} />
                    </a>
            </div>
        </WelcomeConainer>
    )
}
const WelcomeConainer = styled.div`
.icon1-color{
    color: #03BDF8;
}
.buttons-container {
    display: flex;
    gap: 2rem;
}
.button{
    width: 120px;
    height: 30px;
    margin: 20px ;
    border-radius: 5px;
    padding:0.5rem ;
    text-decoration: none;
    font-size: 1.2rem;
    
    
    

}
h6{
    font-size: 2rem;
    margin: 0;
}
h1{
    font-size: 4rem;
}
.btnfos-5 {
    color: #03BDF8;
    border: 0 solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid;
    outline-color: #03BDF8;
    outline-offset: 0px;
    text-shadow: none;
    -webkit-transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
            transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    outline-color: #03BDF8;
    outline-offset: 0px;
  }
  
  .btnfos-5:hover {
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
    outline-offset: 15px;
    outline-color: rgba(255, 255, 255, 0);
    text-shadow: 1px 1px 2px #427388;
  }
`