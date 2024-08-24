import styled from "styled-components";

export const ConteinerFooter = styled.footer`
    width: 100%;
    background: ${props => props.theme.colors.footer};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 50px;

    & * {
        color: #fff !important;
    }

    & p {
        font-size: 17px;
        font-weight: 200;
    }

    padding: 70px 5%;
`

export const ContentFooter = styled.div`

    display: flex;
    justify-content: center;
    gap: 100px;
    flex-wrap: wrap;

    @media only screen and (max-width: 1200px) {
        gap: 50px;
    }

    & h1 {
        margin-bottom: 20px;
    }

    & a {
        font-size: 17px;
        font-weight: 300;
        position: relative;
        width: fit-content;
        transition: color 0.2s;
    }
    
    & a:hover {
        color: ${props => props.theme.colors.whiteblue} !important;
    }
    & a::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;

        transform: translate(-50%, -50%);

        width: 0%;
        height: 1px;
        background: ${props => props.theme.colors.whiteblue};

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

export const LogoContent = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    p {
        text-align: center;
    }
`

export const Logo = styled.img`
    height: 50px;
    user-select: none;
    flex: 0 0 auto;
    @media only screen and (max-width: 510px){
        height: 30px;
    }
`;