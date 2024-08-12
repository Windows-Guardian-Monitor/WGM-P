import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "PetrovSans-Trial";
        src: url("./src/fonts/PetrovSans-Trial-Regular.ttf") format("truetype"),
        url("./src/fonts/PetrovSans-Trial-Regular.woff") format("woff"),
        url("./src/fonts/PetrovSans-Trial-Regular.woff2") format("woff2");
    }
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
        color: initial;

        scroll-behavior: smooth;

    }
    *::selection {
        background: #1171FF;
        color: #cee1ff
    }
    body{
        background: #fff;
        
    }

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #b1b1b7;
        border-radius: 10px;
        border: 3px solid #f1f1f1;
    }

    scrollbar {
        scrollbar-width: thin;
        scrollbar-color: #b1b1b7 #f1f1f1;
    }


`;
