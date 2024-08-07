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
        /* color: #dcdedf; */
        color: #012;

        scroll-behavior: smooth;

    }
    body{
        background: #fff;
    }
`;
