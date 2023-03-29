import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
  min-height: 100vh;
  background: #0c78e4;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  word-break: break-word;
  padding: 10px;
    }
  `;
