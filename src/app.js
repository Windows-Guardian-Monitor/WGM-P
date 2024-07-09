import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        outline-style: none;
        outline: none;
        border: none;
        font-family: Arial, Helvetica, sans-serif;
        scroll-behavior: smooth;
        color: black;
    }
    body{
        width: 100vw;
        height: 100vh;
    }
`;
