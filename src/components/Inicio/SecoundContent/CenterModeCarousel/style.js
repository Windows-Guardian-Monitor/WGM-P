import styled from "styled-components";

export const Carrossel = styled.section`
    width: 100%;
    margin: 0 auto;
    & > div > div > div > div {
        display: flex;
    }
    & > div > div > div > div > div {
        margin: 0 15px;
    }
    
`;

export const IconCarrossel = styled.div`
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    transform-origin: bottom center;

    margin-top: 12px;
    cursor: pointer;

    &:hover img{
        transform: scale(1.2);
    }
    &:active {
        cursor: grabbing;
    }
    
    & img {
        height: 70px;
        user-select: none;
        transform-origin: bottom center;
        transition: transform 0.2s;
    }
    & span{ 
        user-select: none;
        text-align: center;
    }
`;
