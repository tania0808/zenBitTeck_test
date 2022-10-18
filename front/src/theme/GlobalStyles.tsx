import { createGlobalStyle } from "styled-components";
import Arabic from "./Arabic.woff";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Apercu Arabic Pro';
    src: local('Arabic'),
        url(${Arabic}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  * {
  font-family: 'Apercu Arabic Pro';
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
`;

export default GlobalStyle;
