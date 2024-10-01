import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

  /* Basic Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* stylizes the body and main elements*/
  body {
    font-family: ${({ theme }) => theme.font.primary};
    background-color: #F8F8F8;       
    overflow-x: hidden; 
  }
  
  html {
  scroll-behavior: smooth;
}

  /* Remove default style from links */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Remove default list style */
  ul,
  ol {
    list-style: none;
  }

  /* Removes default inner spacing from buttons */
  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    font: inherit;
  }

  /* Removes default borders from inputs */
  input,
  textarea,
  select,
  button {
    border: none;
    outline: none;
  }

  /* Sets the height and style of tables */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Sets the height of images and videos */
  img,
  video {
    max-width: 100%;
    height: auto;
  }
`;