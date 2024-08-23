import styled from "styled-components";

export const SecondContent = styled.section`
    width: 100%;
    padding: 50px 10%;
    padding-top: 110px;
    padding-bottom: 100px;

    @media only screen and (max-width: 1200px){
        padding: 50px 10%;
        padding-top: 100px;
        padding-bottom: 100px;
    }

    background: ${props => props.theme.colors.primary};

    display: flex;
    flex-direction: column;

    gap: 30px;
`;
export const TextContent = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    text-align: center;

    & h2 {
        font-size: 2.5rem;
        font-weight: 900;
    }
    & p {
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

    padding: 0 45px 10px;
    transition: margin 0.2s;

    &:hover {
        margin-left: 5px;
    }
    
    & span {
        color: ${props => props.theme.colors.blue};
        font-weight: 800;
        transition: padding 0.2s;
    }

    &:hover span {
        padding-right: 5px;
    }

`;
