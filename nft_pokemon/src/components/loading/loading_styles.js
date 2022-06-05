import styled from "styled-components";
import pokemonballW from "../../icons/pokemonballW.png"

/* --------------------------------------------------------------------------- */
export const Cuerpo = styled.div` 
    box-sizing: border-box;
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: flex;
`;
export const Wireframe = styled.div`
    margin: auto;
    width: 360px;
    height:630px;
    background: #B8B8B8 url(${pokemonballW}) no-repeat 125px -20px;
    background-size: 260px;
    border-radius: 12px;
    //box-shadow: 0px 8px 60px -10px rgba(13,28,39,0.6);
`;
/* --------------------------------------------------------------------------- */
export const Title = styled.div` 
    display: flex;
    align-items: center;
    color: #FFFFFF;
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
/* --------------------------------------------------------------------------- */
export const CenterSection = styled.div` 
    display: flex;
    align-items: center;
    color: #FFFFFF;
    font-size: 22px;
    margin-top: .5rem;
    position: relative;
    z-index: 2;

    ${props => props.estilo === "arrowLeft" && ` 
        margin: 3rem 0 0 1rem;
    `}
    ${props => props.estilo === "imagen" && ` 
        flex: auto;
        justify-content:right;
        

    `}
    ${props => props.estilo === "arrowRight" && ` 
        flex: auto;
        justify-content: flex-end;
        margin: 3rem 1rem 0 0;
    `}
`;
/* --------------------------------------------------------------------------- */
export const Card = styled.div` 
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 352px;
    height: 404px;
    border-radius: 8px;
    background: #ffffff;
    position: relative;
    z-index: 1;
    top:-3rem;
`;