// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
html{
    scroll-behavior: smooth;
}
.max-width{
    max-width: 1300px;
    padding: 0 80px;
    margin: auto;
}

`;

export default GlobalStyle;
