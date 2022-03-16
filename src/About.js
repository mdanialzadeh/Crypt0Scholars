import React from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";

function About() {
  return (
    <info.Container>
      <info.Accordion>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Tournament Rules & Progress</Accordion.Header>
            <Accordion.Body>
              <br />
              <ul>
                <li>
                  During the beta, users can create profiles, test the game, and
                  provide feedback. Depending on how well the beta goes, we will
                  do some more stress tests to ensure a smooth and scalable
                  launch. After the launch, there’ll be several free tournaments
                  with beta rewards. These free competitions will rank players.
                  Once ranks are determined, the actual tournaments with prize
                  funds will begin.
                </li>
                <br />
                <li>
                  We may do multiple tournaments throughout different seasons
                  and price points. There’ll be several tournaments for
                  different ranks. Most likely using ELO ranking system.
                </li>
                <br />
                <li>
                  There will be an anti-smurfing and anti-cheating mechanism in
                  place. We will not disclose how exactly, to prevent anyone
                  from getting creative about circumventions. IF YOU ARE CAUGHT
                  CHEATING, YOUR NFT & YOUR WALLET WILL BE BLACKLISTED. This is
                  the yet another feature of NFTs. Cheaters / smurfers can
                  always use VPNs to change IP addresses, or hardware spoofers
                  to fool anti cheating systems. But an NFT stays the same. Same
                  policy ID, same asset ID, same wallet ID. On chain And they
                  may buy a brand new NFT and rebuild their reputation under a
                  new wallet address, but it’s going to cost them a lot
                  financially. This is the best deterrent. It’s going to cost
                  them A LOT to cheat / smurf. On top of losing their game data,
                  and integrity within the blockchain chess community.
                </li>
                <br />
                <li>
                  Please note – The final game will either have to be in person,
                  and or streamed in an isolated area to make sure the finalists
                  are not cheating. This should discourage would be cheaters
                  from cheating during the previous stages. Cheaters simply
                  won’t be able to run bots or algorithms during the live and /
                  or streamed event. Details are being withheld about the exact
                  measures to prevent creative circumventions to anti-cheating
                  measure.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>High-School Scholarship</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  A certain percent of all open tournament fees will be
                  redirected into a scholarship prize fund.
                </li>
                <br />
                <li>
                  There will be a separate tournament held once a year, for ONLY
                  high school students to compete for a scholarship towards
                  college. Ideally, payout will be on-chain to the university of
                  their choice. Same ranking methods, and rules as the open
                  competition will apply, with entry fees being waived.
                </li>
                <br />
                <li>
                  This prize fund will also be open to individual contributions
                  from generous benefactors. Every single red sat, or lovelace
                  will be seen on chain.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Prize Pool & Initial Funding</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  Prize pool will be factored based on criteria such as number
                  of competitors, sponsors, and fundraiser contributions.
                  Payments will be handled transparently on the blockchain.
                </li>

                <br />
                <li>
                  Competitors will pay a very small entry fee (roughly $20 in
                  crypto) for a chance at the grand prize. The prize fund, and
                  entry fee portions that will contribute to the grand prize
                  will automatically go into a smart contract, programmed to pay
                  to the winning student’s university of choice.
                </li>
                <br />
                <li>
                  The amount of funds from the entry fees contributing to the
                  final prize will vary based on amount of competitors enrolled.
                  We want the prize pool to make a substantial difference in
                  terms of tuition, not just a portion of it. And not only for
                  the first year of the competition but every year thereafter.
                  Thus, we must calculate how much will go towards this year, vs
                  next year’s competition.
                </li>
              </ul>
              <br />
              <h6>
                Disclaimer: We are not a 501C entity or a non-for profit. We
                have operating costs. From hosting servers, NFT artists costs
                for generating NFTs, web domains, game developers, blockchain
                developers, web developers. Some funds from the open competition
                will go towards operating expenses.
              </h6>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Community Engagement</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  Game development, from game features, to entry fee amounts, to
                  anti-cheating rules, and everything in between is open to
                  community participation. Join our discord, and help mold the
                  game to become a version you'll love.
                </li>
                <br />
                <li>
                  Tweeting and posting about this project can help increase the
                  prize fund by raising awareness, and in turn potential
                  participants. The ultimate goal of this project is to have as
                  many tournaments throughout the year as possible, thus giving
                  as many students as possible, a better chance at funding their
                  higher education.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </info.Accordion>
    </info.Container>
  );
}

const info = {
  Accordion: styled.div`
    height: min-content;
    box-shadow: 0 4px 10px 1px rgb(0 0 0 / 10%),
      0 20px 4px -1px rgb(0 0 0 / 46%);
    width: 90vw;
    color: white;
    margin: auto;
    background-color: black;
    max-width: 1440px;
    @media (max-width: 640px) {
    }
  `,

  Container: styled.div`
    margin-top: 20vh;
    height: 80vh;
    background-color: transparent;
  `,
};

export default About;
