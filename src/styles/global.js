import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Slabo+27px&display=swap");

*{
    -webkit-font-smoothing: antialiased !important; 
    margin: 0;
    padding: 0;
    font-size: 18px;
}
  div{
    font-size: 1em;
 }
  html, body, #root {
    height: 100vh;  
  }
  #root{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  body {
    background: #FF8533;
    }
    a{
       text-decoration: none;
       color: #FFFFFF; 
   }
   @media (max-width: 899px) {
    body {
    background: #8c8c8c;
    }
`;