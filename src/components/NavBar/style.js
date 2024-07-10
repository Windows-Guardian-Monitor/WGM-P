import styled, {css} from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 70px;

    padding: 10px 50px;
    justify-content: space-between;

    position: absolute;
    top: 0;

    display: flex;
    align-items: center;

    background: linear-gradient(to right, #194FA6, #2473F2);

    overflow: hidden;

    @media only screen and (max-width: 1020px){
        & {
            height: ${({isOpen}) => (isOpen ? "100vh" : "70px")};
            transition: height 0.3s;
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
        transition: transform 0.3s, top 0.3s, width 0.3s;
        
        content: '';
        width: 100%;
        height: 2px;
        background-color: #111;
`;
export const List = styled.ul`
    display: flex;
    gap: 20px;
`;
export const Logo = styled.img`
    height: 50px;
`;
export const ContentList = styled.li`
    position: relative;

    & * {
        cursor: pointer;
        padding: 25px 15px;
    }

    & *:hover {
        color: white;
        transition: color 0.2s;
    }
    & *::after{
        content: "";
        top: calc(100% + 5px);
        left: 50%;

        width: 0%;
        height: 1px;
        
        
        position: absolute;
        transition: transform 0.2s, width 0.2s, left 0.2s;

        background: white;
    }
    & *:hover::after{
        width: 100%;
        left: 0%;


    }
`;
