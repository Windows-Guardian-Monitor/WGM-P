import styled, { css } from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.primary};
    
    padding: 25px 15px;
    max-width: 400px;
    min-height: 150px;

    border-radius: 30px;
    ${props => props.isDarkMode
        ? css`
            box-shadow: 0 0 10px 5px ${props.theme.colors.transparent};
        `
        : css`
            box-shadow: 0 0 10px 5px ${props.theme.colors.transparent}20;
        `
    }

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media only screen and (max-width: 1080px) {
        flex-direction: column;
        max-width: 300px;
    }
    @media only screen and (max-width: 840px) {
        flex-direction: column;
        max-width: 250px;
    }
    @media only screen and (max-width: 700px) {
        flex-direction: column;
        max-width: 100%;
    }

    transition: all 0.2s;
    &:hover{
        transform: scale(1.03);
    }
`

export const ContainerStamp = styled.div`
    width: 100px;
    flex: 0 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        width: 100%;
        object-fit: cover;
        z-index: 50;
    }
`
export const StampImage = styled.div`
    z-index: 0;

    width: 70px;
    height: 70px;
`
export const About = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Title = styled.h1`
    & * {
        font-size: 17px;
        font-weight: 700;
        color: ${props => props.color}ff !important;
        ${props => props.isDarkMode
        ? css`
            background: ${props => props.color}60;
        `
        : css`
            background: ${props => props.color}22;
        `
    }
        border-radius: 20px;
        padding: 3px 15px;
        width: fit-content;
    }
`

export const TextContent = styled.p`
    & * {
        font-size: 13px;
    }
    padding-left: 10px;
`