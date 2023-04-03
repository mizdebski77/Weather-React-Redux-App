import { createGlobalStyle } from "styled-components";
import background from "./common/Images/background2.jpg";

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
  color: rgba;
  padding: 10px;
  color: ${({ theme }) => theme.color.fontMain};
  background-image: url("${background}");
  background-size: cover;
  background-position: center;
  }
  `;
