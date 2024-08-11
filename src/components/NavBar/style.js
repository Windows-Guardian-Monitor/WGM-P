import styled, {css} from "styled-components";

export const hover = "#1171FF";

export const HeaderAnimation = styled.div`
    @media only screen and (max-width: 1020px){
        
        position: absolute;
        top: 0;
        left: 0;
        z-index: 49;
        width: 100%;
        height: ${({isOpen}) => (isOpen ? "100vh" : "65px")};
        background: ${hover};
        transition: height ${({isOpen}) => (isOpen ? "0.3s" : "0.65s")};
    }
`;

export const Header = styled.header`
    z-index: 50;
    width: 100%;
    height: 70px;

    padding: 10px 50px;

    position: fixed;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #fff;

    overflow: hidden;

    box-shadow: #B0B7BA88 0px 0px 10px 5px;

    @media only screen and (max-width: 510px){
        & img {
            height: 30px;
        }
    }

    @media only screen and (max-width: 1020px){
        & img {
            ${props =>
					props.isOpen
						? css`
                            opacity: 0;
                        `
						: css`
                            animation: logo 1s;
                        `}
            transition: opacity 0.2s;

            @keyframes logo {
                0% {
                    opacity: 0;
                }
                50%{
                    opacity: 0;
                }
                100%{
                    opacity: 100;
                }
            }
        }

        & {
            height: ${({isOpen}) => (isOpen ? "100vh" : "70px")};
            transition: height 0.5s;
            flex-direction: column;
            align-items: start;

            padding: 10px 15px;

        }
        & div {
            display: block;
        }
        & ul {
            height: 25%;
            position: absolute;

            flex-direction: column;
            align-items: center;
            gap: 50px;

            margin-top: ${({isOpen}) => (isOpen ? "0px" : "120px")};
            transition: margin-top 0.3s;

            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    @media only screen and (min-width: 1020px){
        & div {
            display: none;
        }
        justify-content: space-between;
    }

`;
export const IconList = styled.div`
    width: 30px;
    height: 30px;

    position: absolute;
    top: 20px;
    right: 20px;

    cursor: pointer;
    appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;

    &:hover span{
        background: ${hover};
    }

    & span:nth-child(1) {
        content: '';
        ${props =>
				props.isOpen
					? css`
                        transform: rotate(45deg);
                        `
					: css`
                        top: 8px;
                        `}
    }

    & span:nth-child(2) {
        content: '';
        ${props =>
				props.isOpen &&
				css`
                    width: 0;
                `}
    }

    & span:nth-child(3) {
        content: '';
        ${props =>
				props.isOpen
					? css`
                        transform: rotate(-45deg);
                        `
					: css`
                        top: 22px;
                        `}
    }

`;
export const Line = styled.span`
    position: absolute;
    top: 15px;
    transition: transform 0.3s, top 0.3s, width 0.3s, background 0.3s;
    
    content: '';
    width: 100%;
    height: 2px;
    background-color: #000;
`;
export const List = styled.ul`
    display: flex;
    gap: 20px;
`;
export const Logo = styled.img`
    height: 50px;
    user-select: none;
`;
export const ContentList = styled.li`
    user-select: none;

    position: relative;

    & * {
        cursor: pointer;
        padding: 25px;
    }

    & *:hover {
        color: ${hover};
        transition: color 0.2s;
    }
    & *::after{
        content: "";
        top: calc(100% + 5px);
        left: 50%;

        width: 0%;
        height: 3px;
        
        border-radius: 0 0 3px 3px;
        
        position: absolute;
        transition: transform 0.2s, width 0.2s, left 0.2s;

        background: ${hover};
    }
    & *:hover::after{
        width: 100%;
        left: 0%;
    }
`;
