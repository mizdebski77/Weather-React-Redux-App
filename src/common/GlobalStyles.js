import styled, { createGlobalStyle } from "styled-components";
import background from "./Images/background.jpg";

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
  color: ${({ theme }) => theme.color.fontMain};
  background-image: url("${background}");
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(1px);
  }
  `;
