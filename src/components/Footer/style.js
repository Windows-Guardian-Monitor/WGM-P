import styled from "styled-components";

export const ConteinerFooter = styled.footer`
    width: 100%;
    background: ${props => props.theme.colors.footer};

    display: flex;
    justify-content: center;
    align-items: center;

    & * {
        color: ${props => props.theme.colors.primary};
    }

    padding: 30px 5%;
`

export const ContentFooter = styled.div`
    width: 60%;

    display: flex;
    justify-content: center;
    gap: 30px;

    flex-wrap: wrap;

    & a {
        font-size: 17px;
        font-weight: 300;
        position: relative;
        color: #fff;
    }
    
    & a:hover {
        color: ${props => props.theme.colors.whiteblue};
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