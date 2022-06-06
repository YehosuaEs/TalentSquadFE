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
export const Card = styled.div`
    margin: auto;
    width: 360px;
    height:630px;
    background: #B8B8B8 url(${pokemonballW}) no-repeat 125px -20px;
    background-size: 260px;
    border-radius: 12px;
    //box-shadow: 0px 8px 60px -10px rgba(13,28,39,0.6);
`;
/* --------------------------------------------------------------------------- */
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
/* --------------------------------------------------------------------------- */
export const CardInfo = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 352px;
    height: 404px;
    border-radius: 8px;
    background: #ffffff;
    position: relative;
    z-index: 1;
    top:-3rem;
`;
/* --------------------------------------------------------------------------- */
export const TypeCointaner = styled.div`
    display: flex;
    justify-content:center;
`;

export const Type = styled.div`
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    width: 42px;
    height: 20px;
    border-radius: 1rem;
    margin: 50px 10px 0px;
    color: #ffffff;
    background-color: #666666;
`;
/* --------------------------------------------------------------------------- */
export const CartTitles = styled.div` 
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    margin-top: 15px;
    color: #888888;
`;
/* --------------------------------------------------------------------------- */

export const Container = styled.div` 
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    width: 16rem;
`;


export const About = styled.div`
    margin: 10px 0;
    font-size: 10px;
    color:#212121;
    
    ${props => props.estilo === "centerDiv" && ` 
        border-left: 1px solid #000;
        border-right: 1px solid #000;
        padding: 0px 22px 0px 22px;
    `}
`; 

export const Info = styled.div`
    display: flex;
    align-items: center;

    height: 1.9rem;

    
    ${props => props.estilo === "characteristic" && ` 
        justify-content: center;
        text-align: center;
        height:auto;
        font-size:8px;
        color:#666665;
        line-height:12px;
    `}
`;

export const Iconos = styled.img` 
    width: 16px;
    vertical-align: text-bottom;
    margin-right: 2px;
    //border: 1px solid green;
`;
/* --------------------------------------------------------------------------- */
export const Text = styled.p` 
    width: 312px;
    font-size: 10px;
    text-align: justify;
    color: #212121;

`;
/* --------------------------------------------------------------------------- */
export const StatsDetails = styled.div` 
     
`;



