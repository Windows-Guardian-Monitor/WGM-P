import styled from "styled-components";

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;

    align-items: center;
    width: 100%;
    padding: 50px 10%;
    padding-top: 110px;

    text-align: center;

    @media only screen and (max-width: 1200px){
        padding: 50px 10%;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 900;
    }

    h3 {
        font-size: 1.2rem;
        font-weight: 700;
    }
`;

export const ArticleText = styled.article`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 30px;

    width: 100%;
`;

