import React from "react";
import NavBar from "./Navbar"
import RoadMap from './RoadMap';
import Home from './Home';
import Nft from './Nft';
import MoreInfo from './MoreInfo';
import {Element} from 'react-scroll'

import styled, { createGlobalStyle } from "styled-components";
import Contacts from "./Contacts";


function App() {

  if (History.scrollRestoration) {
    History.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}



  return (

    <>
    <CSSReset />  
    <NavBar/>
    <Contacts/>
    <Styles.Wrapper>
       

        <Element name="home" className="element" >
          <Home/>
        </Element>      

        <Element name="roadmap" className="element">
          <RoadMap />
        </Element>            

        <Element name="nft" className="element" >
          <Nft />
        </Element>

        <Element name="moreinfo" className="element" >
          <MoreInfo />
        </Element>
 
    </Styles.Wrapper>
    </>
  );
}

const Styles = {
  Wrapper: styled.main`
    display: flex;
    display: flex;
    flex-direction: column; 
    padding-top: 6rem;
    @media (max-width: 640px) {
      padding-top: 0;
    }
    @media(min-width: 641px) {
      width:90%;
      margin: 0px 5%;
    }
  `,
};

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box; 
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
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #eeeeee;
    }
  

  .container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eeeeee;
}

a {
  text-decoration: none;
  color: inherit;
  font-family: inherit;
}

`;

export default App;

