import styled from "styled-components";
import pokemonballW from "../../icons/pokemonballW.png"

export const Cuerpo = styled.div` 
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 360px;
    max-height: 630px;
`;
export const Wireframe = styled.div`
    width: 360px;
    height:630px;
    background: #B8B8B8 url(${pokemonballW}) no-repeat 125px -20px;
    background-size: 260px;
    border-radius: 12px;
`;
/* --------------------------------------------------------------------------- */
export const Title = styled.div` 
    display: flex;
    align-items: center;
    color: white;
    //border: 1px solid black;
    font-weight: 700;
    margin-top: 0.6rem;

    ${props => props.estilo === "icono" && `
        font-size: 24px;
        margin-left:1rem;
    `}
    ${props => props.estilo === "titulo" && `
        font-size: 24px;
        margin-left: 1rem;
    `}
    ${props => props.estilo === "number" && `
        font-size: 12px;
        flex: auto;
        justify-content: flex-end;
        margin-right: 1rem;
    `}
`;