import React, {useState} from 'react'
import styled from "styled-components";
import green from "./images/Green.png"

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
    
    

    return (
        <home.Wrapper>
            <home.Container>
                <home.Welcome>
                    Welcome to Crypto Scholars!
                </home.Welcome>
                    <h2>Pre-Registration NOW OPEN!</h2>
                    <form name="preRegister" id="preRegister" onSubmit={handleSubmit} >
                        <home.Input className="email_input" type="email" name="email" required placeholder="Enter Email Here" value = {email} onChange={e => setEmail(e.target.value)}/>
                        <home.Button type="submit" id="submit_button" disabled={disable} >Submit</home.Button>
                    </form>
                    <div className="email_result">
                        {status?.type === 'success' && <p>Succes! thank you for Preregistering</p>}
                        {status?.type === 'error' && (
                        <p>Oh no! something went wrong. Please try again later or contact us on our Discord
                        </p>
                        )}        
                    </div>
                    <h3>As a bonus for pre-registering before the cut off date on 3/31/2022 participants will recieve early access to the portal in order to set up their profiles.
                    </h3>
                    <home.Image src={green} alt=""/>
                
            </home.Container>
          </home.Wrapper>
    )
}

const home = {
    
    Wrapper: styled.main`
      display: flex;
      flex-direction: column;
      height:100vh;
      margin: 5vw 10vw 10vw 10vw;
      align-items:center;
      justify-content: center;
    
    `,

    Container: styled.div`
        text-align:center;
        height: 95%;
        min-height: 50em;
        width: 80%;
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding-bottom: 5em;
        padding-top: 5em;
        @media (min-width: 640px) {
            font-size: 1.8rem;
            width: 80%;
        }
        
    `,

    Image: styled.img`
    margin-top: 5vh;
    width: 60%;
    max-width: 800px;
    `,

    Input: styled.input`
    width: 15em;
    padding: .2rem .1rem;
    `,

    Button: styled.button`
    background: none;
    border: 1px solid black;
    margin-left: 1rem;
    padding: .2rem .4rem;
    `,


    Welcome: styled.h1`
    text-transform: uppercase;
    font-size: 2.4em;
    `,
  };

export default Home
