import React, {useState} from 'react'
import styled from "styled-components";


function MoreInfo() {

    const [active, setActive] = useState("")

 

    return (
        
            <info.Container>
                <info.Title className="moreinfo">
                    More Info
                
                    <info.Buttons>
    
                        <info.Button onClick={() => {
                            setActive("1")
                            }}>Tournament Rules & Progress
                        </info.Button>
                        <info.Button onClick={() => {
                            setActive("2")
                            }}>High-school scholarship
                        </info.Button>
                        <info.Button onClick={() => {
                            setActive("3")
                            }}>Prize Pool & Initial Funding
                        </info.Button>
                        <info.Button onClick={() => {
                            setActive("4")
                            }}>Community Engagement
                        </info.Button>

                    </info.Buttons>
              </info.Title>      
                    <div>
                        {active === "1" && 
                        <info.Overlay>
                            <h4>Tournament Rules & Progress</h4>
                            <br/>
                            <ul>
                                <li>
                During the beta, users can create profiles, test the game, and provide feedback. Depending on how well the beta goes, we will do some more stress tests to ensure a smooth and scalable launch.
After the launch, there’ll be several free tournaments with beta rewards. These free competitions will rank players. 
Once ranks are determined, the actual tournaments with prize funds will begin.
                                </li>
                                <br/>
                                <li>
                                    We may do multiple tournaments throughout  different seasons and price points. There’ll be several tournaments for different ranks. Most likely using ELO ranking system.
                                </li>
                                <br/>
                                <li>
                                There will be an anti-smurfing and anti-cheating mechanism in place. We will not disclose how exactly, to prevent anyone from getting creative about circumventions. 
IF YOU ARE CAUGHT CHEATING, YOUR NFT & YOUR WALLET WILL BE BLACKLISTED. 
This is the yet another feature of NFTs. Cheaters / smurfers can always use VPNs to change IP addresses, or hardware spoofers to fool anti cheating systems. But an NFT stays the same. Same policy ID, same asset ID, same wallet ID. On chain
And they may buy a brand new NFT and rebuild their reputation under a new wallet address, but it’s going to cost them a lot financially. This is the best deterrent. It’s going to cost them A LOT to cheat / smurf. On top of losing their game data, and integrity within the blockchain chess community.
                                </li>
                                <br/>
                                <li>
                                Please note – The final game will either have to be in person, and or streamed in an isolated area to make sure the finalists are not cheating. This should discourage would be cheaters from cheating during the previous stages. Cheaters simply won’t be able to run bots or algorithms during the live and / or streamed event. Details are being withheld about the exact measures to prevent creative circumventions to anti-cheating measure. 
                            </li>
                        </ul>
                        </info.Overlay>}

                        {active === "2" && 
                        <info.Overlay>
                              <h4>High-School Scholarship</h4>
                            <br/>
                        <ul>
                            <li>
                            A certain percent of all open tournament fees will be redirected into a scholarship prize fund. 
                            </li>
                            <br/>
                            <li>
                            There will be a separate tournament held once a year, for ONLY high school students to compete for a scholarship towards college. Ideally, payout will be on-chain to the university of their choice. 
Same ranking methods, and rules as the open competition will apply, with  entry fees being waived. 
                            </li>
                            <br/>
                            <li>
                            This prize fund will also be open to individual contributions from generous benefactors. Every single red sat, or lovelace will be seen on chain.
                            </li>
                        </ul>
                    
                        
                        


                        </info.Overlay>}

                        {active === "3" && 
                        <info.Overlay>
                                 <h4>Prize Pool & Initial Funding</h4>
                            <br/>
 <ul>
                            <li>
                                Prize pool will be factored based on criteria such as number of competitors, sponsors, and fundraiser contributions. Payments will be handled transparently on the blockchain. 
                            </li>
                                
                            <br/> 
                            <li>
                                Competitors will pay a very small entry fee (roughly $20 in crypto) for a chance at the grand prize. The prize fund, and entry fee portions that will contribute to the grand prize will automatically go into a smart contract, programmed to pay to the winning student’s university of choice.
                            </li>
                            <br/>
                            <li> 
                                The amount of funds from the entry fees contributing to the final prize will vary based on amount of competitors enrolled. We want the prize pool to make a substantial difference in terms of tuition, not just a portion of it. And not only for the first year of the competition but every year thereafter. Thus, we must calculate how much will go towards this year, vs next year’s competition. 
                            </li>
                        </ul>
                        <br/>
                        <h5>
                            Disclaimer: We are not a 501C entity or a non-for profit. We have operating costs. From hosting servers, NFT artists costs for generating NFTs, web domains, game developers, blockchain developers, web developers. Some funds from the open competition will go towards operating expenses. 
                        </h5>
                        </info.Overlay>}
{active === "4" && 
                        <info.Overlay>
                                <h4>Community Engagement</h4>
                            <br/>
                        <p>
                        Game development, from game features, to entry fee amounts, to anti-cheating rules, and everything in between is open to community participation. Join our discord, and help mold the game to become a version you'll love.
                        </p>
                        <br/>
                        <p>
                            Tweeting and posting about this project can help increase the prize fund by raising awareness, and in turn potential participants. The ultimate goal of this project is to have as many tournaments throughout the year as possible, thus giving as many students as possible, a better chance at funding their higher education.
                        </p>
                        </info.Overlay>}

                        
                    </div>

            </info.Container>
        
    )
}

const info = {


  Container: styled.div`
      
      height: min-content;
      min-height: 100vh;
      max-width: 140em;
      padding: 0vh 0vh 10vh 0vh;
      display:flex;
      flex-direction: column;
      
      @media (max-width: 640px) {
       min-height: 100vh;
       
    }
      
    
  `,

  Title: styled.h2`
  
    
    text-align: center;
    margin: 10vh 0vh 0vh 0vh;
 
  
  `,

  Buttons: styled.div`
  margin: 2rem auto;
  width: 80%;
  display: flex;
  background: transparent;
  flex-wrap: wrap;
  justify-content: center;

 
  `,

  Button: styled.button`
  background: ##000b76;
  border: 1px solid black;
  margin: .2rem;
  font-weight: 200;
  border: 1px solid black;
  border-radius: 10%;
  margin-left: .5rem;
  padding: .8em .2rem;
  box-shadow:inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom,#2863cf 5%,#494a92 100%);
	background-color:#7892c2;
  border-radius:6px;
  border:1px solid #dcdcdc;
  display:inline-block;
  cursor:pointer;
  color:white;
  text-wrap: wrap;
  font-weight:bold;
  
  text-decoration:none;
  width: 20%;
  
  &: hover {
      background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
      background-color:#f6f6f6;
      color: black;
             
    }
   &: active {
      position:relative;
      top:1px;
   } 
  @media (max-width: 640px) {
    padding: .5em;
    width: 40%;
   
}
  `,

  Overlay: styled.div `
    width: 70%;
    margin: 0% 15%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    @media (max-width: 640px) {
    min-height: max-content;
    padding-bottom: 10vh;
    padding-top: 1vh;
    }
    
  `,
}


export default MoreInfo
