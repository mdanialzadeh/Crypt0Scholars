import React from "react";
import NavBar from "./Navbar"
import RoadMap from './RoadMap';
import Home from './Home';
import Nft from './Nft';
import MoreInfo from './MoreInfo';
import {Element} from 'react-scroll'
import CSSReset from "./globalStyles";
import styled from "styled-components";
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
    <Styled.Wrapper >
    <NavBar/>
    <Contacts/>
       
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
          
    </Styled.Wrapper>
    </>
  );
}

const Styled = {
  Wrapper: styled.main`
  display:flex;
  flex-direction: column;
  height: 100vh;
  
  
  `,
}

export default App;

