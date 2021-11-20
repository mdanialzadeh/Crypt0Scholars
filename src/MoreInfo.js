import React, {useState} from 'react'
import styled from "styled-components";


function MoreInfo() {

    const [active, setActive] = useState("")

    return (
        <info.Wrapper >
            <info.Container>
                <info.Title className="moreinfo">
                    More Info
                </info.Title>
                    <info.Buttons>
    
                        <info.Button onClick={() => {
                            setActive("1")
                            }}>Tournament Rules & Progress
                        </info.Button>
                        <info.Button onClick={() => {
                            setActive("2")
                            }}>Open Competition
                        </info.Button>
                        <info.Button onClick={() => {
                            setActive("3")
                            }}>Prize Pool & initial Funding
                        </info.Button>
                        <info.Button onClick={() => {
                            setActive("4")
                            }}>Community Engagement
                        </info.Button>

                    </info.Buttons>
                    
                    <div>
                        {active === "1" && 
                        <info.Overlay>
                            <ul>
                                <li>
                                After registration is complete, students will be onboarded into the gaming platform to create an account and begin playing. This will be purely based on skill. The best competitor will win. 
                                </li>
                                <br/>
                                <li>
                                The chess game will have preliminary rounds to determine ranks. This will be the calibration phase to make sure each player is in the correct tier. Once a player is ranked based on win / loss ratios, they’ll enter into brackets. Brackets will be based on ranks. Eventually going down to a final game between two opponents, and the winner being awarded a yet to be determined amount towards college tuition.
                                </li>
                                <br/>
                                <li>
                                Please note – the final game will either have to be in person, and or streamed in an isolated area to make sure the finalists are not cheating. This should discourage would be cheaters from cheating during the previous stages. Cheaters simply won’t be able to run bots or algorithms during the live and / or streamed event. Details are being withheld about the exact measures to prevent creative circumventions to anti-cheating measure. 
                            </li>
                        </ul>
                        </info.Overlay>}

                        {active === "2" && 
                        <info.Overlay>
                           <p>
                            After the first high school only tournament, we will open a second chess tournament to the general public. This is how we will ensure the prize account for the students will always have funds. A percentage from the entry fees of the general public competition, will go towards the scholarship fund. An overly simplistic example would be the following. General public competition #1 entry fee is 10 ADA. 1 Ada will be diverted to scholarship fund, 9 ADA will go into general competition fund. 
                        </p>
                        <br/>
                        <h5>
                            Disclaimer: We are not a 501C entity or a non-for profit. We have operating costs. From hosting servers, NFT artists costs for generating NFTs, web domains, game developers, blockchain developers, web developers. Some funds from the open competition will go towards operating expenses. 
                        </h5>
                        </info.Overlay>}

                        {active === "3" && 
                        <info.Overlay>
 <ul>
                            <li>
                                prize pool will be factored based on criteria such as number of competitors, sponsors, and fundraiser contributions. payments will be handled transparently on the blockchain. 
                            </li>
                                
                            <br/> 
                            <li>
                                competitors will pay a very small entry fee (roughly $20 in crypto) for a chance at the grand prize.The prize fund, and entry fee portions that will contribute to the grand prize will automatically go into a smart contract, programmed to pay to the winning student’s university of choice.
                            </li>
                            <br/>
                            <li> 
                                The amount of funds from the entry fees contributing to the final prize will vary based on amount of competitors enrolled. We want the prize pool to make a substantial difference in terms of tuition, not just a portion of it. And not only for the first year of the competition but every year thereafter. Thus, we must calculate how much will go towards this year, vs next year’s competition. 
                            </li>
                        </ul>
                        </info.Overlay>}
{active === "4" && 
                        <info.Overlay>
  <p>
                            Tweeting and posting about this project can help increase the prize fund by raising awareness, and in turn potential participants. The ultimate goal of this project is to have as many tournaments throughout the year as possible, thus giving as many students as possible, a better chance at funding their higher education.
                        </p>
                        </info.Overlay>}

                        
                    </div>

            </info.Container>
        </info.Wrapper>
    )
}

const info = {
    
    Wrapper: styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
 
    height:100vh;
    margin: 6vw 5vw;   
    padding-top: 6rem;
    @media (max-width: 640px) {
      padding-top: 0;
    }

    
  `,

  Container: styled.div`
      text-align:center;
      height: 60vh;
      margin: 0vw 5vw;
      width:100%;
      display:flex;
      flex-direction: column;
      
    
  `,

  Title: styled.h1`
  margin-bottom: 4rem;
  margin-top: 0rem;
  font-size: 2.0rem;
  `,

  Buttons: styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  `,

  Button: styled.button`
  background: #7A95D9;
  padding: .7rem;
  border: 1px solid black;
  margin: .2rem;
  font-weight: 400;
  @media (max-width: 640px) {
    padding: .5em;
    font-size: 1.0rem;
}
  `,

  Overlay: styled.div `
    margin-top: 6vh;
    width: 94%;
    margin: 5% 2%;
    display: flex;
    font-size: 1rem;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    @media (min-width: 640px) {
        font-size: 2.8em;
    }
    
  `,
}


export default MoreInfo
