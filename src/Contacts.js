import React from 'react'
import styled from "styled-components";
import discord from "./images/discord.png"
import twitter from "./images/twitter.png"

function Contacts() {
    return (
        <Contact.Container>
            <a href="https://discord.gg/4D5f4RanSN" target="_blank" rel="noreferrer">
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
    top: 10rem;
    right: 0;
    background: #7A95D1;
    z-index: 20;
    width 6rem;
    height: 12em;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    padding: .8em .2em .8em .6em;
    border-radius: 20px 0px 0px 20px;
    @media (max-width: 640px) {
      top: 2rem;
      right: 0;
      width 4.5rem;
      height: 10em;
      border-radius: 20px 0px 0px 20px;
      
    }
    `,

  Image: styled.img`
    width: 100%;
  `,
}

export default Contacts
