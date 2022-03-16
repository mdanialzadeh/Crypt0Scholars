import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";

function Purchase() {
  function openPaymentWindow() {
    const paymentUrl =
      "https://payment.nft-maker.io/?p=0653d20992904c5b8e8ebc0bead03b3e&c=1";

    // Specify the popup width and height
    const popupWidth = 500;
    const popupHeight = 700;

    // Calculate the center of the screen
    const left =
      window.top.outerWidth / 2 + window.top.screenX - popupWidth / 2;
    const top =
      window.top.outerHeight / 2 + window.top.screenY - popupHeight / 2;

    const popup = window.open(
      paymentUrl,
      "NFT-MAKER PRO Payment Gateway",
      `popup=1, location=1, width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`
    );

    // Show dim background
    document.body.style = "background: rgba(0, 0, 0, 0.5)";

    // Continuously check whether the popup has been closed
    const backgroundCheck = setInterval(function () {
      if (popup.closed) {
        clearInterval(backgroundCheck);

        console.log("Popup closed");

        // Remove dim background
        document.body.style = "";
      }
    }, 1000);
  }

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
            <Card.Body style={{ margin: "auto", textAlign: "center" }}>
              <img
                style={{ width: "95%" }}
                src="https://pro.nft-maker.io/images/buttons/paybutton_1_2.svg"
                onClick={openPaymentWindow}
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
                The early adopters, the blockchain enthusiasts, and of course,
                chess players.
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
                <h4>NFT Perks</h4>
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
                  to compete in chess tournaments held monthly
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
