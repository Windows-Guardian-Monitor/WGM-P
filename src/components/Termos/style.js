import styled from "styled-components";

export const Container = styled.section`
    padding: 50px 20%;
    padding-top: 110px;
    padding-bottom: 110px;

    @media only screen and (max-width: 1200px){
        padding: 50px 10%;
    }

    h2 {
        margin-bottom: 15px;
        margin-top: 50px;
    }

    h1 {
        font-size: 50px;
    }

    strong {
        color: ${props => props.theme.colors.blue};
        border-bottom: 1px solid ${props => props.theme.colors.blue};
    }
    p, ul {
        padding-left: 30px;
    }
`