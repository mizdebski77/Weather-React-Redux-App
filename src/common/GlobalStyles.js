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
  word-break: break-word;
  padding: 10px;
    }
  `;
