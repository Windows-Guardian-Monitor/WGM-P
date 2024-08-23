import styled from "styled-components";

export const Third = styled.section`
    background: linear-gradient(to bottom, #fff, #ffffff00);

    padding: 150px 10%;
    padding-top: 110px;
    @media only screen and (max-width: 1200px){
        padding: 50px 10%;
        padding-top: 80px;
    }

    display: flex;
    flex-direction: column;
    gap: 50px;
`
export const ContentTitle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 20px;

    & p {
        text-align: center;
    }
`

export const Title = styled.section`
    font-size: 47px;
    font-weight: 700;
    text-align: center;
`

export const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
`