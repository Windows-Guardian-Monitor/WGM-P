import styled from "styled-components";
import {hover} from "../../NavBar/style";

export const ContainerWrite = styled.section`
    position: relative;
    z-index: 0;

    height: 100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 100px;

    padding: 50px 10%;
    padding-top: 110px;

    @media only screen and (max-width: 1200px){
        padding: 50px 10%;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const TextoWrite = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 30px;

    text-align: center;


    @media only screen and (max-width: 1200px){
        grid-column: span 3;
        
    }
    grid-column: span 2;
    
    h1, h1 span {
        font-size: 2.5rem;
        font-weight: 900;
    }
    p {
        font-size: 23px;
    }
    h1 span:nth-child(1){
        color: ${hover};
    }
    h1 span:nth-child(2){
        margin-left: -5px;
        user-select: none;
    }
`;

export const DownloadButtom = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    
    div{
        padding: 10px 40px;
        color: ${hover};
    
        border: 2px solid ${hover};
        border-radius: 10px;

        overflow: hidden;
    
        height: 100%;
        width: 100%;
    
        cursor: pointer;
    
        display: flex;
        justify-content: center;
        align-items: center;
    
        position: relative;
        transition: color 0.3s, height 0.3s;

        span{
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 100%;
            height: 00%;
            background: ${hover};
            transition: height 0.3s;
        }
        &:hover span {
            height: 100%;
        }
        &:hover{
            color: #fff;
            animation: baixeAgora 1s infinite;
            animation-delay: 0.7s;
            height: calc(100% - 5px);
        }
    }

    @keyframes baixeAgora {
        0%{
            box-shadow: 0 0 0px 0px #5398FF;
        }
        50%{
            box-shadow: 0 0 7px 3px #5398FF;
        }
        100%{
            box-shadow: 0 0 0px 0px #5398FF;
        }
    }
`;

export const CardImage = styled.img`
    user-select: none;

    object-fit: contain;
    object-position: center;
    height: 330px;

    flex: 0;
    @media only screen and (max-width: 1200px){
        display: none;
    }
    grid-column: span ;
`;
