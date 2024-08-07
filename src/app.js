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

        font-family: 'Sofia Sans', sans-serif;
        font-size: 20px;
        /* color: #dcdedf; */
        color: #012;

        scroll-behavior: smooth;

    }
    body{
        background: #fff;
    }
`;
