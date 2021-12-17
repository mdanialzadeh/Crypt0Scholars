import React from 'react'
import ChessBoard from './ChessBoard'
import styled from "styled-components";


function Roadmap() {


        
    return (
        
            <road.Container id = "roadmap" className = "roadmap_container">
                <road.Title>Road Map</road.Title>
                <ChessBoard/>
                
                <road.Info className= "roadmap_info"></road.Info>
                
            </road.Container>
       
    )
}

const road = {

 
  Container: styled.div`
      text-align:center;
      padding-bottom: 50px;
      max-width: 1440px;
      min-height: 100vh;
      width:100vw;
      align-items:center;
      display:flex;
      flex-direction: column;
    
         
    
  `,

    Title: styled.h2`
    margin-bottom: 1em;
    margin-top: 3em;
    @media (max-width: 640px) {
      margin-top: 1em;
      
    }
    `,

    Info: styled.div`
    display: grid;
    grid-template: 1fr 1fr 1fr 1fr 1fr / 1fr;
    grid-auto-flow: column;
    
    flex: .8;
    min-height: 240px;
    font-size: 1.9em;
    justify-items: stretch;
    align-items: end;
    @media (min-width: 640px) {
        font-size: 11.7em;
        width: 90%;
      }
    `,

   
  };

  

export default Roadmap
