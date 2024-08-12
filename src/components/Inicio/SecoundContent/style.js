import styled from "styled-components";
import {hover} from "../../NavBar/style";

export const SecondContent = styled.section`
    width: 100%;
    padding: 50px 15%;
    padding-top: 110px;

    @media only screen and (max-width: 1200px){
        padding: 50px 15%;
    }

    background: #fff;

    display: flex;
    flex-direction: column;

    gap: 30px;
`;
export const TextContent = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    & h2 {
        font-size: 2.5rem;
        font-weight: 900;
    }
    & p {
        text-align: center;
        font-size: 23px;
    }

    & a {
        
    display: flex;
    align-items: center;
    cursor: pointer;
    }

    & a:last-child {
        margin-top: -20px;
    }
`;
export const VejaContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;

    padding: 0 45px 10px;
    transition: margin 0.2s;

    &:hover {
        margin-left: 5px;
    }
    
    & span {
        color: ${hover};
        font-weight: 700;
        transition: padding 0.2s;

    }

    &:hover span {
        padding-right: 5px;
    }

`;
