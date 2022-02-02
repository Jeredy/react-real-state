import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Cormorant Garamond", sans-serif;
    }

    html, body {
        over-flow-x: hidden;
    }
`;

export default GlobalStyle;
