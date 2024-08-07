import styled from "styled-components";
import {hover} from "../NavBar/style";

export const ContainerWrite = styled.section`
    position: relative;
    z-index: 0;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    
`;

export const TextoWrite = styled.div`
    @media only screen and (max-width: 1020px){
        grid-column: span 2;
        
    }
    grid-column: span 1;
    
    * {
        font-size: 3rem;
        font-weight: 900;
    }
    
    & span:nth-child(2){
        color: ${hover};
    }
    & span:nth-child(3){
        margin-left: -5px;
        user-select: none;
    }
    
    `;
export const CardImage = styled.div`
    @media only screen and (max-width: 1020px){
        grid-column: span 2;
        
    }
    grid-column: span 1;
`;
/* &::before{
        z-index: -1;
        position: absolute;
        content: '';

        width: 100%;
        height: 100%;

        background: ${hover};
        display: block;
    } */
