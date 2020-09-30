import { createGlobalStyle } from 'styled-components';
import 'vendors/normalize.css';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.6;
    font-family: 'Merriweather', sans-serif;
  }
  
  h1, h2, h3, h4, h5, span {
    margin: 0;
    font-family: 'Lora', serif;
  }
  
  button {
    padding: 0;
    cursor: pointer;
  }
  
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

export default GlobalStyle;
