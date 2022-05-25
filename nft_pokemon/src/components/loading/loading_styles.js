import styled from "styled-components";

export const Cuerpo = styled.div` 
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 375px;
`;
export const Wireframe = styled.div`
    //position: fixed;
    width: 360px;
    height: 100vh; //640px
    //left: 280px;
    //top: 10%;
    //margin-top:-50px ;
    background: #B8B8B8;
    border-radius: 12px;
`;
export const Pokeball = styled.img` 
    position: absolute;
    width: 280px;
    height: 280px;
    //margin-left:100px;
    left: 6.2em;
    top: -20px;
    /* White */
    //background: #FFFFFF;
    opacity: .1;   
`;