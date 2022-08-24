import { createGlobalStyle } from "styled-components";
import "./_font.scss";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }
    html,
    body {
        scroll-behavior: smooth;
        font-family: Lato, sans-serif;
        color: white;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s;
        transition-delay: background-color 5000s, color 5000s;
    }

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
`;

export default GlobalStyle;
