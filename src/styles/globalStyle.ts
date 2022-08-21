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
`;

export default GlobalStyle;
