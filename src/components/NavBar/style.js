import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 50px;
    background-color: red;
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
