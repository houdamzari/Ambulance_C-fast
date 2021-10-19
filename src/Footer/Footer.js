import React from 'react';
import styled from "styled-components";
import {theme} from "../theme";
import footer from "./media/footer.png";
import LeftContainer from "./LeftContainer";

const Container = styled.div`

   
  position: absolute;
  z-index: -1;
  img{
    width: 98.8vw;
    height: 100%;
    bottom: 0;
  }
`
function Footer(props) {
    return (
        <Container>
            <img src={footer} alt="footer"/>
            <LeftContainer />
        </Container>
    );
}

export default Footer;