import React from 'react';
import styled from "styled-components";
import {theme} from "../theme";
import footer from "./media/footer.png";
import LeftContainer from "./LeftContainer";
import logo from "./media/logo.png";
import ContactUs from "./ContactUs";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20rem;
   width: 100vw;
  height: 80vh;
  position: relative;
  z-index: -1;
  bottom: 0;
  

  svg{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img {
    
  }

`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20rem;`

function Footer(props) {
    return (
        <>
            <Wrapper>
        <Container>
            <svg  viewBox="0 -20 700 110" width="100%" height="400" preserveAspectRatio="none">
                <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#6493B8" />
            </svg>
            <LeftContainer id='contact'/>
        </Container>
        <ContactUs/></Wrapper></>

    );
}

export default Footer;