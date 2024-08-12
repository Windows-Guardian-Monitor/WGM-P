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
`;
export const VejaContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: star;

    margin-top: -15px;

    transition: margin 0.2s;
    &:hover {
        margin-left: 5px;
    }
    
    & span {
        transition: padding 0.2s;
        font-weight: 800;
        color: ${hover}
    }

    &:hover span {
        padding-right: 5px;
    }
`;
