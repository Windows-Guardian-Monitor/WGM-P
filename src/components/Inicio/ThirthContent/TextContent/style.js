import styled, { css } from "styled-components";

export const ContainerFather = styled.div`
    position: relative;
    width: 300px;
    height: 213px;
    border-radius: 30px;
    overflow: hidden;

    ${props =>
        !props.isWindow && css`
            transition: transform 0.2s;

            &:hover{
                transform: translateY(-10px);
            }
        `}
`;
export const ContainerTransparent = styled.div`
    cursor: pointer;
    background: transparent;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    ${props =>
        props.isWindow &&
        css`
            z-index: 70;
            position: fixed;
            top: 0;
            left: 0;

            height: 100vh;
            width: 100vw;

            background: ${props => props.theme.colors.transparent}aa;
        `}
`;
export const Container = styled.div`
    

    & > div:first-child {
        display: flex;
        flex-direction: column;
        gap: 15px;
        
    ${props =>
        props.isWindow &&
        css`
            @media only screen and (max-width: 510px){
                margin-top: 15px;
            }
        `}
    }
    overflow-y: ${props => props.isWindow ? "auto" : "hidden"};

    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    padding: 40px 30px;

    background: ${props => props.theme.colors.primary};

    flex: 0 0 auto;

    ${props =>
        props.isWindow &&
        css`
            z-index: 71;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            
            width: 80%;
            height: 90%;
            border-radius: 30px;
        `}
`;

export const Close = styled.h4`
    display: none;
    ${props =>
        props.isWindow &&
        css`
            z-index: 72;
            cursor: pointer;
            position: absolute;
            top: 20px;
            right: 20px;

            display: flex;
            justify-content: center;
            align-items: center;

            width: 40px;
            height: 40px;

            border-radius: 50%;

            background: ${props => props.theme.colors.transparent}10;
            transition: background 0.2s;

            &:hover {
                background: ${props => props.theme.colors.blue}11;
            }

            & div {
                width: 100%;
                height: 100%;
                position: relative;

                display: flex;
                justify-content: center;
                align-items: center;
            }
            
            & span{
                content: "";
                position: absolute;
                height: 2px;
                width: 20px;
                background: ${props => props.theme.colors.secound};
                transition: background 0.2s;
            }
            &:hover span{
                background: ${props => props.theme.colors.blue};
            }
            & span:first-child{
                transform: rotate(45deg);
            }
            & span:nth-child(2){
                transform: rotate(-45deg);
            }
        `}
`;

export const H4Colores = styled.h4`
    font-weight: 1000;

    padding-bottom: 15px;
    border-bottom: 1px solid ${props => props.theme.colors.transparent};
    background: linear-gradient(45deg, #1171FF, #3B18FF, #593BFF, #0145AA, #1171FF, #3B18FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 500% 100%;

    animation: colores 5s infinite linear;
    animation-delay: 0s;

    @keyframes colores {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 100% 0%;
        }
    }
`;

export const Text = styled.p`
    font-size: 19px;
    text-align: start;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 23px;
    max-height: calc(23px * 5);
    
    ${props =>
        props.isWindow &&
        css`
            display: block;
            max-height: 100%;
        `}
`;
export const Description = styled.div`
    display: none;
    ${props =>
        props.isWindow &&
        css`
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        `}
`
