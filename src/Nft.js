import React from "react";
import "./Nft.css";
import styled from "styled-components";
import King from "./images/King.jpg";
import Queen from "./images/Queen.jpg";
import Knight from "./images/Knight.jpg";
import Saphire from "./images/Saphire.jpg";
import Ruby from "./images/Ruby.jpg";
import Jade from "./images/Jade.jpg";
import Container from "react-bootstrap/Container";

function Nft() {
  return (
    <Container>
      <nft.Container>
        <nft.Title>NFT Fundraiser</nft.Title>
        <nft.Section>
          To further help our project have maximum impact during the first
          tournament, we will have an NFT sale of two types of NFTs. Our first
          NFT style is geared towards chess players who prefer traditional chess
          piece representations. There will be a very limited amount of NFTs of
          this iteration, sold via gum ball style vending machine.
        </nft.Section>

        <div className="nft_examples">
          <a
            href="https://pool.pm/a102935a22a5dd3f0e8a1f15ded834fe3bf9a4920a197478ce9743eb.SapphireRook"
            target="_blank"
            rel="noreferrer"
          >
            <figure className="hover-img">
              <img src={Saphire} alt="" />
              <figcaption>
                <h3>Saphire Rook</h3>
              </figcaption>
            </figure>
          </a>
          <a
            href="https://pool.pm/a102935a22a5dd3f0e8a1f15ded834fe3bf9a4920a197478ce9743eb.JadeKnight"
            target="_blank"
            rel="noreferrer"
          >
            <figure className="hover-img">
              <img src={Jade} alt="" />
              <figcaption>
                <h3>Jade Knight</h3>
              </figcaption>
            </figure>
          </a>
          <a
            href="https://pool.pm/a102935a22a5dd3f0e8a1f15ded834fe3bf9a4920a197478ce9743eb.RubyBishop"
            target="_blank"
            rel="noreferrer"
          >
            <figure className="hover-img">
              <img src={Ruby} alt="" />
              <figcaption>
                <h3>Ruby Bishop</h3>
              </figcaption>
            </figure>
          </a>
        </div>
      </nft.Container>
      <nft.Container>
        <nft.Section>
          The second style will cater to chess players who want a more abstract
          representation of chess pieces. They are made using generative
          adversarial neural networks interpretations, of hundreds of chess
          piece examples. <br />
          <br /> These will be very LIMITED, can’t be purchased, and only earned
          through game achievements. When a player reaches the required
          milestones, an AI generated NFT be will be airdropped their wallet.
        </nft.Section>

        <div className="nft_examples">
          <figure className="hover-img">
            <img src={Knight} alt="" />
            <figcaption>
              <h3>Knight</h3>
            </figcaption>
          </figure>

          <figure className="hover-img">
            <img src={Queen} alt="" />
            <figcaption>
              <h3>Queen</h3>
            </figcaption>
          </figure>

          <figure className="hover-img">
            <img src={King} alt="" />
            <figcaption>
              <h3>King</h3>
            </figcaption>
          </figure>
        </div>

        <nft.Section>
          <p>
            NFT Utility - NFTs offer many advantages, Crpt0Scholars is focusing
            on the following 3 features:
          </p>

          <ul>
            <nft.Li>
              They can store meta data, in our case – your win / loss records &
              subsequent ranking.
            </nft.Li>
            <nft.Li>
              They can act as authentication method for various uses (logging
              in, perks, air drops, payouts, anti-cheating, etc) simply by
              owning them in your wallet.
            </nft.Li>
            <nft.Li>
              They are 100% yours. If your Crypt0Scholars NFT has a legendary
              track record, and someone wants to acquire it, you can sell it.
              Presently, digital assets are just licensed to users on web 2.0 -
              not owned by them.
            </nft.Li>
          </ul>
        </nft.Section>
      </nft.Container>
    </Container>
  );
}

const nft = {
  Li: styled.li`
    margin: 1rem;
  `,

  Wrapper: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1440px;
    min-height: 600px;
    hight: min-content;
    
    justify-content: space-around;
    @media (max-width: 640px) {
      padding-top: 0;
  `,

  Container: styled.div`
    text-align: center;

    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `,

  Title: styled.h2`
    padding: 12% 0px 0.1rem 0px;
  `,

  Section: styled.p`
    padding: 40px 0px;
    min-height: max-content;
    font-size: clamp(15px, 2vw, 22px);
    @media (max-width: 640px) {
    }
  `,

  Link: styled.a`
    color: blue;
    text-decoration: underline;
  `,
};

export default Nft;
