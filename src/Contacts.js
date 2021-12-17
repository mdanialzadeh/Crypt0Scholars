import React from 'react'
import styled from "styled-components";
import discord from "./images/discord.png"
import twitter from "./images/twitter.png"

function Contacts() {
    return (
        <Contact.Container>
            <a href="https://discord.gg/W8ZZQ53a" target="_blank" rel="noreferrer">
                <Contact.Image src={discord} alt="discord logo"/> 
            </a>
            <a href="https://twitter.com/Crypt0Scholars" target="_blank" rel="noreferrer">
                <Contact.Image src={twitter} alt="Twitter Logo"/> 
            </a>
        </Contact.Container>
    )
}

const Contact = {
    
  Container: styled.div`
    position: fixed;
    top: 6em;
    right: 0;
    background: #transparent;
    z-index: 20;
    width 3.0rem;
    height: 7rem;
    display:flex;
    flex-direction: column;
    backdrop-filter: blur(10px);
    justify-content: space-around;
    padding: .2em .4em .1em .5em;
    border-radius: 1em 0px 0px 1em;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
    border: .1em solid rgb(240 240 240 / 6%);
    
    @media (max-width: 640px) {
      top: 2em;
      padding: .3em .2em .3em .2em;
      right: 0em;
      width 2.5em;
      height: 5.6em;
      flex-direction: column;
    }
    `,

  Image: styled.img`
  height: 100%;
  width: 100%;
  padding: .1em;
  filter: drop-shadow(0 0 .2rem #9e9090 );
    box-shadow: 0 4px 6px -10px rgb(0 0 0 / 10%), 0 2px 4px -10px rgb(0 0 0 / 6%);
    &: hover {
      transform: scale(1.1);
    }
  `,
}

export default Contacts
