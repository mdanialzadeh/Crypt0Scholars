import React from "react";
import styled from "styled-components";
import { ReactTinyLink } from "react-tiny-link";

function News() {
  return (
    <news.Container>
      <ReactTinyLink
        cardSize="large"
        showGraphic={true}
        maxLine={3}
        minLine={2}
        url="https://blog.chainalysis.com/reports/2021-crypto-scam-revenues/"
        header="The Biggest Threat to Trust in Cryptocurrency: Rug Pulls Put 2021 Scam Revenue Close to All-time Highs"
        defaultMedia="https://blog.chainalysis.com/wp-content/uploads/2021/12/crypto-scams-2022-min-1170x508.png"
        description="This blog is a preview of our 2022 Crypto Crime Report. Sign up here to reserve your copy and we’ll email you the full report when it comes out in February!

                Scams were once again the largest form of cryptocurrency-based crime by transaction volume, with over $7.7 billion worth of cryptocurrency taken from victims worldwide.
                
                "
      />
      ;
      <ReactTinyLink
        cardSize="large"
        showGraphic={true}
        maxLine={3}
        minLine={2}
        url="https://messari.io/pdf/messari-report-crypto-theses-for-2022.pdf"
        header="Crypto Theses
                for 2022"
        defaultMedia="https://messari.s3.amazonaws.com/images/agora-images/176A5CDF-night_preview.png"
        description="Key trends, people, companies, and
                projects to watch across the crypto
                landscape, with predictions for 2022
                
                "
      />
      ;
      <ReactTinyLink
        cardSize="large"
        showGraphic={true}
        maxLine={3}
        minLine={2}
        url="https://blog.chainalysis.com/reports/2022-crypto-crime-report-introduction/"
        header="Crypto Crime Trends for 2022: Illicit Transaction Activity Reaches All-Time High in Value, All-Time Low in Share of All Cryptocurrency Activity"
        defaultMedia="https://blog.chainalysis.com/wp-content/uploads/2022/01/crypto-crime-intro-min-1170x508.jpg"
        description="This blog is a preview of our 2022 Crypto Crime Report. Sign up here to reserve your copy and we’ll email you the full report when it comes out in February!
                Cryptocurrency-based crime hit a new all-time high in 2021, with illicit addresses receiving $14 billion over the course of the year, up from $7.8 billion in 2020.
                
                "
      />
    </news.Container>
  );
}

const news = {
  Container: styled.div`
    min-height: 100vh;
    display: flex;
    padding: 6rem 0;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    position: sticky;
    bottom: 0;
    color: black !importnat;
  `,
};
export default News;
