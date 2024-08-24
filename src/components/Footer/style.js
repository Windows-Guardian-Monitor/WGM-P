import styled from "styled-components";

export const ConteinerFooter = styled.footer`
    width: 100%;
    background: #000511;
    margin-top: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    & * {
        color: #fff;
    }

    padding: 70px 5%;
`

export const ContentFooter = styled.div`
    width: 60%;

    display: flex;
    justify-content: center;
    gap: 100px;

    @media only screen and (max-width: 1200px) {
        gap: 50px;
    }

    flex-wrap: wrap;

    & a {
        font-size: 17px;
        font-weight: 300;
        position: relative;
        width: fit-content;
    }
    
    & a:hover {
        color: #3385FF;
    }
    & a::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;

        transform: translate(-50%, -50%);

        width: 0%;
        height: 1px;
        background: #3385FF;

        transition: width 0.2s;
    }
    & a:hover::after {
        width: 100%;
    }

    & img {
        height: 20px;
    }
`

export const ContainerContent = styled.section`
    display: flex;
    flex-direction: column;

    width: 200px;

    gap: 10px;
`