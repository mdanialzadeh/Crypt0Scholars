import React from "react";
import styled from "styled-components";
import discord from "./images/discord.png";
import twitter from "./images/twitter.png";
import jpg from "./images/jpg.jpg";

function Contacts() {
  return (
    <Contact.Container>
      <a
        href="https://discord.gg/cqfP6PJrA5"
        target="_blank"
        rel="noreferrer"
        style={{ margin: "auto 0" }}
      >
        <Contact.Image src={discord} alt="discord logo" />
      </a>
      <a
        href="https://twitter.com/AiScholars"
        target="_blank"
        rel="noreferrer"
        style={{ margin: "auto 0" }}
      >
        <Contact.Image src={twitter} alt="Twitter Logo" />
      </a>
      <a
        href="https://www.jpg.store/collection/aischolars"
        target="_blank"
        rel="noreferrer"
        style={{ margin: "auto 0" }}
      >
        <Contact.Image src={jpg} alt="jpg logo" />
      </a>
    </Contact.Container>
  );
}

const Contact = {
  Container: styled.div`
    position: relative;
    bottom: 0;
    left: 0;
    background: transparent;
    z-index: 20;
    height: 80px;
    display: flex;
    margin: auto;
    flex-direction: row;
    backdrop-filter: blur(100px);
    justify-content: center;
    padding: 0;
    box-shadow: 0 2px 40px -10px rgb(0 0 0 / 100%);
  `,

  Image: styled.img`
    height: 50px;
    width: 60px;
    margin: auto 10px;
    filter: drop-shadow(0 0 0.2rem #9e9090);
    border-radius: 10px;
    box-shadow: 0 4px 6px -10px rgb(0 0 0 / 10%),
      0 2px 4px -10px rgb(0 0 0 / 6%);
    &: hover {
      transform: scale(1.1);
    }
  `,
};

export default Contacts;
