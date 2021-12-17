
import { createGlobalStyle } from "styled-components";


const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }


  

  html {
    box-sizing: border-box; 
    font-family: 'Chivo', sans-serif;
    display: flex;
    overflow: scroll;
    overflow-x: hidden;
    background-color: #f1f2f39a;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='80%25' height='80%25'%3E%3Cdefs%3E%3Cpattern id='p' width='100' height='100' patternUnits='userSpaceOnUse' patternTransform='scale(1.32)'%3E%3Cpath id='a' data-color='fill' fill='%23FFFFFF' d='M50 50h50v50H50zM0 0h50v50H0z'%3E%3C/path%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23p)' width='100%25' height='100%25'%3E%3C/rect%3E%3C/svg%3E");
background-attachment: fixed;
background-blend-mode: hard-light;


    justify-content: center;
    min-width: min-content;
    font-size: clamp(16px, 4vw, 22px);
  } 
  
  ::-webkit-scrollbar {
    width: 10px;
  }
  

  ::-webkit-scrollbar-track {
    background: #3f3f9054
  }
  
  
  ::-webkit-scrollbar-thumb {
      background:  #7A95D1
    }
    
    
    ::-webkit-scrollbar-thumb:hover {
      background: #0033AD;
  }

  body { 
    max-width: 1440px;
    
    
    }

a {
  text-decoration: none;
  color: inherit;
  font-family: inherit;
}

`;

export default CSSReset