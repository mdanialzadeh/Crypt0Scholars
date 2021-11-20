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
            <Navbar.Logo></Navbar.Logo>
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
          </Navbar.Wrapper>
        )}
      </Styles.Wrapper>
    );
  }
  
  const Styles = {
    Wrapper: styled.main`
      display: flex;
      z-index: 10;
    `
  };
  
  const Navbar = {
    Wrapper: styled.nav`
      flex: 1;
      align-self: flex-start;
      padding: 0 3rem;
      height: 6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #FDFDFB;
      position:fixed;
      width: 100%;
      z-index: 2;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
    `,
    Logo: styled.div`
      padding: 0.5rem 1rem;
      height: 50px;
      width: 120px;
      background-size: contain;
      background-image: url(${logoimg});
    `,
    Items: styled.ul`
      margin:0;
      display: flex;
      list-style: none;
    `,
    Item: styled.li`
      padding: 0 1.2rem;
      cursor: pointer;
      font-size: 1.5rem
    `
  };
  
  const MobileNavbar = {
    Wrapper: styled(Navbar.Wrapper)`
      position: fixed;
      width: 100vw;
      bottom: 0;
      height: 5rem;
      padding: 0 1rem;
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
      font-size: 1.3rem;
      white-space: nowrap;
      justify-content: center;
      display: flex;
      padding: 0 .4rem;
    `,
  };
  


export default Nav
