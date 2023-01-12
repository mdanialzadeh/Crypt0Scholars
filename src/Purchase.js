import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";

function Purchase() {
  return (
    <Container
      style={{
        margin: "0em auto 4em auto",
        background: "transparent",

        padding: ".5em 0",
      }}
    >
      <Row xl={3} xs={1} style={{}}>
        <Col style={{ margin: "1em 0 " }}>
          <Card style={{ height: "100%", margin: "auto" }}>
            <div
              style={{
                position: "absolute",
                zIndex: "100",
                left: "0",
                right: "0",
                bottom: "0",
                top: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba( 14, 10, 10, 0.45 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 4px )",
                fontSize: "3em",
                color: "rgba( 113, 5, 5 )",
              }}
            >
              {" "}
              Sold Out
            </div>
            <Card.Body style={{ margin: "auto", textAlign: "center" }}>
              <img
                style={{ width: "95%" }}
                src="https://pro.nft-maker.io/images/buttons/paybutton_1_2.svg"
              />
            </Card.Body>
            <Card.Body>
              <p>NFT Drop Date: March 22nd, 2022. </p>
              <p>Time: 3PM EST, 11AM PST, 17:00 UTC</p>
              <p>Total NFT drop: ~100 pieces</p>
              <p>
                Price:
                <br /> Send 77 ADA for 1
                <br />
                Send 154 ADA for 2<br />
                Send 231 ADA for 3<br />
                Send 385 ADA for 5
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ margin: "1em 0px" }}>
          <Card style={{ height: "100%" }}>
            <Card.Body style={{ margin: "auto" }}>
              <h4>Ai Scholars’ heart is the community.</h4>
              <p>
                The early adopters, blockchain enthusiasts, and of course, chess
                players.
              </p>
              <p>
                We look forward to welcoming everyone from all over the world to
                come join our collective.
              </p>
              <p> Think critically and strategically, in chess and in life.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ margin: "1em 0" }}>
          <Card style={{ height: "100%", margin: "auto" }}>
            <Card.Body style={{ textAlign: "center", height: "100%" }}>
              <div>
                <h4>NFT Fun</h4>
                <p>Priority access to new collections</p>
                <p>Merchandise freebies & discounts</p>
                <p>Potential random airdrops</p>
                <p>
                  <a
                    href="https://discord.gg/cqfP6PJrA5"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#7289da" }}
                  >
                    Join our Discord
                  </a>{" "}
                  to compete in chess tournaments held randomly
                  <br /> for prizes such as NFTs and, soon ADA.
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Purchase;
