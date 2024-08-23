import styled from "styled-components";

export const Container = styled.div`
    background: #fff;
    
    padding: 25px 15px;
    max-width: 400px;
    min-height: 150px;

    border-radius: 30px;
    box-shadow: 0 0 10px 5px #ccc;

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
        color: #1171ff;
        font-weight: 700;
        background: #1171ff22;
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