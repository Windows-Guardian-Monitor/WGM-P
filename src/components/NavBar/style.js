import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 50px;
    background-color: red;
    position: relative;

    @media only screen and (max-width: 320px){
        & input {
            display: block;
        }
        & ul {
            display: ${({isOpen}) => (isOpen ? "flex" : "none")};
        }
    }
    @media only screen and (min-width: 320px){
        & input {
            display: none;
        }
    }

`;
export const IconList = styled.input.attrs({type: "checkbox"})`
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
    width: 25px;
    height: 25px;

    background-color: blue;
`;
export const List = styled.ul`
    display: flex;

`;

export const ContentList = styled.li`
    cursor: pointer;
    & *:hover {
        color: white;
    }
`;
