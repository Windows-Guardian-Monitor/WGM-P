import styled, { css } from "styled-components";

export const CardContainer = styled.div`
    overflow: hidden;
    position: relative;
    width: 25%;

    background: #fff;
    padding: 30px 35px 100px;
    border-radius: 30px;

    display: flex;
    flex-direction: column;

    gap: 30px;

    box-shadow: 0 0 10px 5px #ccc;

    @media only screen and (max-width: 768px){
        & img{
        bottom: 25px;
        right: 25px;


        ${({ image }) => (image == "handshake" &&
        css`
            animation: handAnimation 1.5s infinite linear;
            animation-delay: 0.5s;
        `)}

        ${({ image }) => (image == "star" &&
        css`
            top: 25px;
            right: 25px;
            animation: starAnimation 1s infinite;
            animation-delay: 0.5s;
        `)}

        ${({ image }) => (image == "heart" &&
        css`
            transform-origin: 70% 70%;

            animation: heartAnimation 1s infinite;
            animation-delay: 0.5s;
        `)}
        
    }
    }

    @media only screen and (max-width: 1500px){
        width: 100%;
    }

    &:hover img{
        bottom: 25px;
        right: 25px;


        ${({ image }) => (image == "handshake" &&
        css`
            animation: handAnimation 1.5s infinite linear;
            animation-delay: 0.5s;
        `)}

        ${({ image }) => (image == "star" &&
        css`
            top: 25px;
            right: 25px;
            animation: starAnimation 1s infinite;
            animation-delay: 0.5s;
        `)}

        ${({ image }) => (image == "heart" &&
        css`
            transform-origin: 70% 70%;

            animation: heartAnimation 1s infinite;
            animation-delay: 0.5s;
        `)}
        
    }
`
export const TitleContent = styled.h1`
    font-size: 47px;
    @media only screen and (max-width: 500px){
        font-size: 35px;
    }
`
export const MiniContent = styled.span`
    font-size: 17px;

    @media only screen and (max-width: 500px){
        font-size: 15px;
    }
    color: #1171ff;
    font-weight: 700;
    background: #1171ff22;
    border-radius: 20px;
    padding: 3px 15px;
    width: fit-content;
`
export const TextContent = styled.p`
    font-size: 23px;
`
export const ImageOne = styled.img`
    width: 50px;

    transition: all 0.3s;

    position: absolute;
    bottom: -50px;
    right: -50px;

    ${({ image }) => (image == "heart" &&
        css`
            width: 60px;
            @keyframes heartAnimation {
                0% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.3);
                }
                100% {
                    transform: scale(1);
                }
            }
        `)}

    ${({ image }) => (image == "handshake" &&
        css`
            width: 60px;
            transform-origin: bottom center;
            @keyframes handAnimation {
                0% {
                    transform:  rotate(0deg);
                }
                20% {
                    transform: rotate(-10deg) translateY(-10px);
                }
                40% {
                    transform: rotate(0deg);
                }
                60% {
                    transform: rotate(10deg) translateY(-10px);
                }
                80% {
                    transform: rotate(0deg) translateY(0px);
                }
                100% {
                    transform: rotate(0deg) translateY(0px);
                }
            }
        `)}

    ${({ image }) => (image == "star" &&
        css`
            top: -50px;
            right: -50px;
            @keyframes starAnimation {
                0% {
                    transform: rotate(0deg);
                }
                33% {
                    transform: rotate(-30deg);
                }
                66% {
                    transform: rotate(30deg);
                }
                100% {
                    transform: rotate(0deg);
                }
            }
        `)}

`