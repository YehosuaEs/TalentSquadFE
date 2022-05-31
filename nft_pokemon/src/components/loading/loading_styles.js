import styled from "styled-components";
import pokemonballW from "../../icons/pokemonballW.png"

export const Cuerpo = styled.div` 
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 375px;
    max-height: 630px;
`;
export const Wireframe = styled.div`
    width: 375px;
    height:630px;
    background: #B8B8B8 url(${pokemonballW}) no-repeat 80px -20px;
    background-size: 260px;
    border-radius: 12px;
`;
export const Pokeball = styled.img` 
    position: relative;
    border: 1px solid black;
    width: 260px;
    height: 260px;
    //margin-left:100px;
    /* left: 6rem;
    top: -20px; */
    /* White */
    //opacity: .1;   
`;