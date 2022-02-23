import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Montserrat', 'Roboto', sans-serif;
    font-size: 1.6rem;
    cursor: default;
  }

  a {
    text-decoration: none;
    color: #5F6377;
    font-size: 1.2rem;
    font-weight: 500;
    display: block;
    text-align: center;
    margin: 0.6rem 0 2rem 0;
  }
  
  li {
    list-style: none;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  ::placeholder {
    color: rgba(26, 32, 61, 0.3);
    font-size: 1.2rem;
  }
`

export default GlobalStyles
