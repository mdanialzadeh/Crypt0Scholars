import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from 'react-scroll'
import logoimg from "./images/Logo.png"

function Nav() {
    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
      setWindowDimension(window.innerWidth);
    }, []);
  
    useEffect(() => {
      function handleResize() {
        setWindowDimension(window.innerWidth);
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const isMobile = windowDimension <= 640;
  
    return (
      <Styles.Wrapper>
       
        {isMobile ? (
          <MobileNavbar.Wrapper>
            <MobileNavbar.Items>
              <MobileNavbar.Item>
              <Link activeClass="active" className="homenav" to="home" spy={true} smooth={true} duration={1000} >Home</Link>
              </MobileNavbar.Item>
              <MobileNavbar.Item>
              <Link activeClass="active" className="roadmapnav" to="roadmap" spy={true} smooth={true} duration={1000} >Road Map</Link>
              </MobileNavbar.Item>
              <MobileNavbar.Item>
              <Link activeClass="active" className="nftnav" to="nft" spy={true} smooth={true} duration={1000} >NFT's</Link>
              </MobileNavbar.Item>
              <MobileNavbar.Item>
              <Link activeClass="active" className="moreinfonav" to="moreinfo" spy={true} smooth={true} duration={1000} >Info</Link>
              </MobileNavbar.Item>
            </MobileNavbar.Items>
          </MobileNavbar.Wrapper>
        ) : (
          <Navbar.Wrapper>
            <Navbar.Hold>
            <Navbar.Logo src={logoimg}></Navbar.Logo>
            <Navbar.Items>
              <Navbar.Item>
              <Link activeClass="active" className="homenav" to="home" spy={true} smooth={true} duration={1000} >Home</Link>
              </Navbar.Item>
              <Navbar.Item>
              <Link activeClass="active" className="roadmapnav" to="roadmap" spy={true} smooth={true} duration={1000} >Road Map</Link>
              </Navbar.Item>
              <Navbar.Item><Link activeClass="active" className="nftnav" to="nft" spy={true} smooth={true} duration={1000} >NFT Fundriaser & Utility</Link>
              </Navbar.Item>
              <Navbar.Item>
              <Link activeClass="active" className="moreinfonav" to="moreinfo" spy={true} smooth={true} duration={1000} >More Info</Link></Navbar.Item>
            </Navbar.Items>
            </Navbar.Hold>
          </Navbar.Wrapper>
        )}
      </Styles.Wrapper>
    );
  }
  
  const Styles = {
    Wrapper: styled.main`
      z-index: 10; 

    `
  };
  const Navbar = {
    Wrapper: styled.nav`
    overflow-x: hidden;
      left: 0;
      background-color: #f1f2f3;
      position: fixed;
      width: 100%;
      z-index: 12;
      height: 70px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
    `,

    Hold: styled.div`
    max-width: 1440px;
    display: flex;
    height: inherit;
    align-items: center;
    margin: auto;
    justify-content: space-between;
    `,

    Logo: styled.img`
      height: inherit;
      width: 7rem;
      height: 60%;
      padding-left: 30px;
      `,



      Items: styled.ul`
      width: 60%;
      max-width: 700px;
      display: flex;
      list-style: none;
      justify-content: space-around;
      font-size: clamp(16px, 2vw, 20px);
    `,
    Item: styled.li`
      cursor: pointer;

      &: hover {
        color: #062d89;
        transform: scale(1.08);
        
      }
    `
  };
  
  const MobileNavbar = {
    Wrapper: styled(Navbar.Wrapper)`
      position: fixed;
      bottom: 0;
      justify-content: center;
      box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
    `,
    Items: styled(Navbar.Items)`
      height: 100%;
      width: 100%;
      align-items: center;
      display:flex;
      justify-content: space-around;
    `,
    Item: styled(Navbar.Item)`
      align-items: center;
      
      white-space: nowrap;
      justify-content: center;
      display: flex;
    `,
  };
  


export default Nav
