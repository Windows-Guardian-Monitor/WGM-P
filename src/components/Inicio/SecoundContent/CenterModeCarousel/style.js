import styled from "styled-components";

export const Carrossel = styled.section`
    width: 100%;
    margin: 0 auto;
`;

export const IconCarrossel = styled.div`
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transform-origin: bottom center;
    transition: transform 0.2s;

    margin-top: 25px;
    cursor: pointer;

    &:hover{
        transform: scale(1.3);
    }
    &:active {
        cursor: grabbing;
    }
    
    & img {
        height: 50px;
        user-select: none;
    }
    & span{ 
        user-select: none;
    }
`;
