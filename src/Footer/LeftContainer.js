import React from 'react';
import styled from "styled-components";
import {theme} from "../theme";
import logo from "./media/logo.png";

const Container = styled.div`
    
      img{
        position: absolute;
        z-index: 1;
        width: 7rem;
        height: 7rem;
      }
`
function LeftContainer(props) {
    return (
        <Container>
            <img src={logo} alt="logo"/>
        </Container>
    );
}

export default LeftContainer;