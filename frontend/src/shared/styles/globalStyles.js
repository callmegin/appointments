import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`  
  html {
    height: 100%;
    --grey: #D9D9D9;
    --darkgrey: #35393d;
    --light: #FFFFFF;
    --lightgrey: #fafafa;
    --red: #d19292;
    --darkred: #915a5a;
    --dark: #0D1B2A;
    --blue: #507096;
    --green: #509673;
    --lightgreen: #66bb6a;
    --greygreen: #b1c9b2;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 10px; 
  }
  * {
    scrollbar-width: thin;
  }
*::-webkit-scrollbar {
    width: 0.3rem;
    position:absolute;
  }
*::-webkit-scrollbar-track {
    background-color: var(--light)};
  }
*::-webkit-scrollbar-thumb {
    background-color: var(--grey);
  }
  *, *:before, *:after {
    box-sizing: inherit;

  }
  body {
    height: 100%;
    padding: 0;
    margin: 0;    
    -webkit-tap-highlight-color: transparent;
    
    font-size: 1rem;
    background: var(--light);
    color: var(--darkgrey);
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-style: normal; 
  }
  body > #root {
    height: 100%;
}
  h1,h2,h3,h4 {
    margin: 0;
    padding: 0;
    letter-spacing: 2px;
  }
  h3 {
    font-size: 3rem;
    font-weight: 400;
  }
  h1:hover, h2:hover, h3:hover {
    cursor: default;
  }
  a {
    text-decoration: none;
    color: var(--darkgrey);
  }
  a:hover {
    cursor: pointer;
  }
  p {
    margin: 0;
  }
  p:hover {
    cursor: inherit;
  }
  button {
      font-family: 'Roboto', sans-serif;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
`;

export default GlobalStyles;
