import React from 'react'
import styled from "styled-components";

function Description() {
    return (
        <DescriptionContainer>
            <h1>Sobre mi.</h1>
            <p>Hola mi nombre es Jorge Torres, soy ingeniero electronico y desarrollador frontend. Poseo habilidades sólidas en HTML, CSS, JavaScript y React,he tenido la oportunidad de trabajar en diversos proyectos que han enriquecido mi conocimiento y habilidades en el ámbito del desarrollo web. Siempre estoy abierto a nuevos retos y oportunidades para seguir aprendiendo y creciendo profesionalmente.</p>
        </DescriptionContainer>
    )
}

export default Description
const DescriptionContainer = styled.div`
    h1, p{
        color: white;
        text-align: left;
    }
`