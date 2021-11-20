import React from 'react'
import "./Nft.css"
import styled from "styled-components";
import King from "./images/King.jpg"
import Queen from "./images/Queen.jpg"
import Knight from "./images/Knight.jpg"
import Saphire from "./images/Saphire.jpg"
import Ruby from "./images/Ruby.jpg"
import Jade from "./images/Jade.jpg"


function Nft() {
    return (
        <nft.Wrapper >
            <nft.Container>
                <nft.Title>
                    NFT Fundraiser & Utility
                </nft.Title>
                <nft.Section>
                To further help our project have maximum impact during the first tournament, we will have an NFT sale of two types of NFTs. The first NFT style is designed by established artist in the NFT space: <nft.Link href ="https://kriscfox3d.io/"target="_blank" rel="noreferrer"> Kris C Fox</nft.Link>. 
                </nft.Section>

                <div className="nft_examples">
                <a href="https://pool.pm/a102935a22a5dd3f0e8a1f15ded834fe3bf9a4920a197478ce9743eb.SapphireRook" target="_blank" rel="noreferrer">
                    <figure className="hover-img">
                        <img src={Saphire} alt=""/>
                        <figcaption>
                            <h3>Saphire Rook</h3>
                        </figcaption>
                    </figure>                  
                        </a>
                        <a href="https://pool.pm/a102935a22a5dd3f0e8a1f15ded834fe3bf9a4920a197478ce9743eb.JadeKnight" target="_blank" rel="noreferrer">
                      <figure className="hover-img">
                        <img src={Jade} alt=""/>
                        <figcaption>
                            <h3>Jade Knight</h3>
                        </figcaption>
                    </figure>
                    </a>
                    <a href="https://pool.pm/a102935a22a5dd3f0e8a1f15ded834fe3bf9a4920a197478ce9743eb.RubyBishop" target="_blank" rel="noreferrer">
                    <figure className="hover-img">
                        <img src={Ruby} alt=""/>
                        <figcaption>
                            <h3>Ruby Bishop</h3>
                        </figcaption>
                    </figure>
                    </a>
                 </div>              
            <nft.Section> NFT's will potentially hold a player's win loss history within the meta data of the NFT.</nft.Section>
          
            </nft.Container>
            <nft.Container>
   
 <nft.Section>
 Our other NFT offering is based on AI generated art, using AI_Xerxe's crazy neural networks.
 </nft.Section>

                <div className="nft_examples">
                    <figure className="hover-img">
                <a href="https://twitter.com/ai_Xerxes?t=G_NQNroGj0tJ9fps_pCHDQ&s=09" target="_blank" rel="noreferrer">
                        <img src={Knight} alt=""/>
                        <figcaption>
                            <h3>Knight</h3>
                        </figcaption>
                    </a>
                    </figure>
                    <figure className="hover-img">
                    <a href="https://twitter.com/ai_Xerxes?t=G_NQNroGj0tJ9fps_pCHDQ&s=09" target="_blank" rel="noreferrer">
                        <img src={King} alt=""/>
                        <figcaption>
                            <h3>King</h3>
                        </figcaption>
                    </a>
                    </figure>
                    <figure className="hover-img">
                    <a href="https://twitter.com/ai_Xerxes?t=G_NQNroGj0tJ9fps_pCHDQ&s=09" target="_blank" rel="noreferrer">
                        <img src={Queen} alt=""/>
                        <figcaption>
                            <h3>Queen</h3>
                        </figcaption>
                        </a>
                    </figure>
                 </div>              
                 <nft.Section>
                 He trains his neural nets to study countless images of chess pieces, and then let's the AI come up with it's own interpretation.
                </nft.Section>
          
            </nft.Container>

        </nft.Wrapper>
    )
}

const nft = {
    
    Wrapper: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height:120vh;
    margin: 0 5vw;   
    padding-top: 6rem;
    @media (max-width: 640px) {
      padding-top: 0;
      justify-content: space-between;
  `,

  Container: styled.div`
      text-align:center;
      height: 60vh;
      width:86%;
      align-items:center;
      display:flex;
      flex-direction: column;
      justify-content: space-evenly;
   
  `,

  Title: styled.h1`
  font-size: 3rem;
  @media (max-width: 640px) {
    font-size: 1.4rem;
}
  `,

  Section: styled.p`
  font-size: 2rem;
  font-weight: bold;
  @media (max-width: 640px) {
      font-size: 1.2rem;
  }
  `,
  
  Disclaimer: styled.p`
  font-size: 1rem;
  `,

  Link: styled.a`
  color: blue;
  text-decoration: underline;
  `,
}


export default Nft
