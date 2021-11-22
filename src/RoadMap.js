import React from 'react'
import ChessBoard from './ChessBoard'
import styled from "styled-components";


function Roadmap() {


        
    return (
        <road.Wrapper>
            <road.Container id = "roadmap" className = "roadmap_container">
                <road.Title>Road Map</road.Title>
                <ChessBoard/>
                <road.Info className= "roadmap_info"></road.Info>
            </road.Container>
        </road.Wrapper>
    )
}

const road = {

    Wrapper: styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:100vh;
    min-height: 60em;
    margin: 0 5vw;   
    padding-top: 6rem;
    @media (max-width: 640px) {
      padding-top: 0;
  `,

  Container: styled.div`
      text-align:center;
      height: 90%;
      min-height: 40em;
      width:100%;
      align-items:center;
      display:flex;
      flex-direction: column;
    
  `,

    Title: styled.h1`
    margin-bottom: 2em;
    font-size: 2.6em;
    `,

    Info: styled.div`
    display: grid;
    grid-template: 1fr 1fr 1fr 1fr 1fr / 1fr;
    grid-auto-flow: column;
    flex: .8;
    font-size: .9rem;
    justify-items: stretch;
    align-items: end;
    @media (min-width: 640px) {
        font-size: 1.6rem;
        
      }
    `,

    
  };

  

export default Roadmap
