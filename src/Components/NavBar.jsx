import React, { useState } from "react";
import { styled } from "styled-components";
import MenuBurger from "./MenuBurger";



export default function NavBar() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        //setClicked has de opposite state of clicked
        setClicked(!clicked)
    }

    return (
        <>
            <NavContainer>
                <h2>logo</h2>
                <div className={`links ${clicked ? 'active' : ''}`} >
                    <a href="#">Inicio</a>
                    <a href="#">Acerca de</a>
                    <a href="#">Portafolio</a>
                    <a href="#">Contactame</a>
                </div>
                <div className="burger-button">
                    <MenuBurger clicked={clicked} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
            </NavContainer>
        </>
    )
}
const NavContainer = styled.nav`
    background-color: #12202B;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    div a {
    text-decoration: none;
    color: white;
    margin-right: 2rem;
    }
    .burger-button{
    @media (min-width: 768px){
        display: none;
    }
}
    
    .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left:auto;
    right: 0;
    margin-right: auto;
    text-align:center;
    transition: all .5s ease;
    a{
        color: white;
        font-size: 2rem;
        display: block;
    }
    @media (min-width: 768px){
        position: initial;
        margin: 0;
        a{
            font-size: 1rem;
            color: white;
            display: inline;
            cursor: pointer;
        }
    display: block;
    }
    }

    .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
        font-size: 2rem;
        margin-top: 1rem;
        color: #ffffff;
        cursor: pointer;
    }
    }
`
const BgDiv = styled.div`
    background-color: #222;
    position: absolute;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease ;
    &.active{
    border-radius: 0 0 60% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    }
`