import { createGlobalStyle } from "styled-components";
import bg from "./images/666.jpg";

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

:root {
 
}

.app {
  padding-top: 60px;
  min-height: calc(100vh - 72px);
  background-image: url(${bg});
  background-size: 100% 100%;
  background-position: bottom ;

  
}



  html {
    font-family: 'Chivo', sans-serif ;
    overflow-y: scroll;
  } 
  
  ::-webkit-scrollbar {
    width: 10px;
  }
  

  ::-webkit-scrollbar-track {

  }
  
  
  ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom,#e3e3e3,#e3e3e3,#e3e3e3,#e2e2e2,#e3e3e3,#e3e3e3,#e2e2e2,#e3e3e3,#e2e2e2,#e3e3e3,#e2e2e2);
    }
    
    
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(to bottom,#b1acac,#b7b7b7,#8f8b8b,#979191,#afaaaa,#9d9797,#b5b2b2);
    
  }

  body {
   
    margin-top: 0em;
    }
.card {
  background: #e2e2e2 !important;
  border: 8px solid white !important;
  border-radius: 0 !important;
  margin: 1em !important;
  box-shadow: 0px 0px 0px 6px black;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  justify-content: center !important;
}

.card-body {
  flex: 0 !important;
}



  .row {
      --bs-gutter-x: 0 !important;
    }



#nava {
  text-decoration: none;
  font-family: inherit;
  
}

a:-webkit-any-link {
  color: white;
  cursor: pointer;
  text-decoration: none;
}


.bjbehh.bjbehh.bjbehh {
  color: black;
}


.navbar-toggler {
  border: none !important;
}

.bannerimg {
 min-height: 300px;
 max-height: 900px;
 width: 100%;
 margin: 0;
}

.navbar-toggler:focus {
  box-shadow: none !important;
}

`;

export default CSSReset;
