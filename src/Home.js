import React, {useState} from 'react';
import styled, { keyframes } from "styled-components";
import ParticlesBg from 'particles-bg';
import jade from "./images/hi.png"
import q from "./images/q.png";
import k from "./images/k.png";


function Home() {

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxrbw8A_7ep-TUgjgZECnFQThPjhNaXrYvL0AHCwtHXUPdcmxHE/exec'
    
    const form = document.getElementById("preRegister")
    const [disable, setDisable] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        setDisable(true)  
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                  console.log('Success!', response);
                  setStatus({ type: 'success' });
                  setDisable(false);
                  setEmail('');
                  })
              .catch(error => {
                  setDisable(false);
                  setStatus({ type: 'error', error });
              })  
        }
    
        let config1 = {
            num: [-2,1],
            rps: .2,
            radius: [100, 10],
            v: [.1,.9],
            tha: [-1, 1],
            life: [4],
            scale: [1,1.3],
            alpha: [.3,0],
            random: "2",
            body: jade,
            position: "all",
            cross: 'dead',
            
        };

        let config2 = {
            num: [-2,1],
            rps: .2,
            radius: [20, 10],
            v: [.1,.9],
            tha: [-1, 1],
            life: [4],            
            scale: [.3, .5],
            random: "2",
            alpha: [.3,0],
            body: k,
            position: "all",
            cross: 'dead',
            
           
        };
        let config3 = {
            num: [-2,1],
            rps: .2,
            radius: [20,10],
            v: [.1, .9],
            alpha: [.3,0],
            tha: [-1, 1],
            life: [4],
            scale: [.04, .06],
            random: "2",
            body: q,
            position: "all",
            cross: 'dead',
            
           
        };
    return (
        <home.Wrapper>

            <home.Container >
                <home.Top>
                    <home.Info>
                        <p>
                        Crypt0Sholars is a chess tournament players can compete in for a chance at a prize fund at specific intervals, while also holding an annual tournament for high school chess players to win a scholarship.
                        </p>
                        <p>
                       Our mission is to encourage future blockchain students to think independently & critically.
                        </p>
                        <p>
                        Chess fosters both by virtue of being calculated, probabilistic, and dynamic.
                        </p>
                        <p>
                        Through rewards, we are encouraging blockchain ecosystems' continuous adoption, and appreciation by strategic minds / future leaders.
                        </p>
                        <p>
                        We look forward to helping the next generation of Crypto Scholars. 
                        </p>
                        
                    </home.Info>
            <ParticlesBg  config={config1}  type="custom" bg={true}  />
            <ParticlesBg  config={config2}  type="custom" bg={true}  />
            <ParticlesBg  config={config3}  type="custom" bg={true}  />
         
                </home.Top>
                <home.Sub>
            <home.Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 200">
  <path fill="#000b76" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,234.7C384,256,480,256,576,240C672,224,768,192,864,170.7C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
  </home.Wave>
                
                    <home.Pre>Whitelist via NFT Ownership NOW OPEN!</home.Pre>
                    <home.Form name="preRegister" id="preRegister" onSubmit={handleSubmit} >  
                        <home.Input className="email_input" type="email" name="email" required placeholder="Enter Your Wallet Address" value = {email} onChange={e => setEmail(e.target.value)}/>
                        <home.Button type="submit" id="submit_button" disabled={disable} >Submit</home.Button>
                    </home.Form>
                    <div className="email_result">
                        {status?.type === 'success' && <p>Succes! thank you!</p>}
                        {status?.type === 'error' && (
                            <p>Oh no! something went wrong. Please try again later or contact us on our Discord
                        </p>
                        )}        
                    </div>
                   
                    <home.Pre>You need an NFT and to submit the above form to get whitelisted for beta access.
                    </home.Pre>
                    
                </home.Sub>
                
            </home.Container>
          
                        </home.Wrapper>
          
    )
}

const text = keyframes`
0% {
    background: #000b76;
  }
  100% {
    background: #000b76 ;
  }
}
`;

const home = {
    
    Wrapper: styled.main`
    height: 100vh;
    display:flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    min-height: 900px;
    @media (max-width: 640px) {
        padding-top: 0;
        min-height: 600px;
        padding-bottom: 60px;
      } 
      `,
         
    Container: styled.div`    
        height: 100%;
        width: 100%;
        
        
    `,
    Sub: styled.div`
        max-width: 1440px;
        height: clamp(200px, 50%, 1000px);        
        padding-bottom: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
        @media(min-width: 640px) {
            height: 60%;
        }
        `,


    Top: styled.div`
    height: 45%;
    min-height: 300px;
    width: 100%;
    position: relative;
    animation: ${text} 4s linear infinite alternate-reverse both;
    z-index: 1;
    @media (min-width: 640px) {
        height: 40%;
    }
    
    `,

    Wave: styled.svg`
    z-index: 0;
    `,


    Form: styled.form`
    width: 80%;
    display: flex;
    justify-content: center;
 
`,

    Input: styled.input`
    text-align: center;
    padding: .3rem .2rem;
    width: 50%;
    min-width: max-content;
    position: relative;
    box-shadow:inset 0px 1px 0px 0px #ffffff;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;

	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
    `,

    Pre: styled.div `
    text-align: center;   
    width: 80%;
    padding: 5% 0;
    `,


    Button: styled.button`
    width: 15%;
    min-width: max-content;
    border: 1px solid black;
    border-radius: 10%;
    margin-left: 1rem;
    padding: .4em .6em;
    box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color:#ffffff;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
    &: hover {
        background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
        background-color:#f6f6f6;
               
      }
     &: active {
        position:relative;
        top:1px;
     } 
    `,




    Info: styled.div`
    height: 100%;
    padding-top: 5%;
    display: flex;
    width: 75%;
    max-width:1440px
    color: black;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 10%;
    text-alight: center;
    color: white;
    z-index: 20;
    font-size: clamp(13px, 2vw, 22px);
    position: absolute;
    
    
    `,
  };

export default Home
