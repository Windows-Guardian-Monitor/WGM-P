import styled from "styled-components";


export const Conect = styled.section`
    /* 
    background: linear-gradient(27deg, #5A3CFF, #3385FF);

    & * {
        color: #fff;
    }
     */

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 70px;

    padding: 150px 100px;
    padding-top: 110px;
    @media only screen and (max-width: 1200px){
        padding: 50px 10%;
        padding-top: 80px;
    }
`