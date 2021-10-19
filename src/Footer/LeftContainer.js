import React from 'react';
import styled from "styled-components";
import {theme} from "../theme";
import logo from "./media/logo.png";
import IconBar from "./IconBar";

const Container = styled.div`
    
      img{
        position: absolute;
        z-index: 1;
        width: 7rem;
        height: 7rem;
        top: 10rem;
        left: 10rem;
      }
  h1{
    color: ${theme.lightgrey};
    position: absolute;
    top: 17rem;
    left: 9rem;
    width: 10%;
    text-align: center;
    font-family: 'Lobster', cursive;
  }
`
function LeftContainer({id}) {
    return (
        <Container>
            <img id={id} src={logo} alt="logo"/>
            <h1>Ambulances C-Fast</h1>
            <IconBar />

        </Container>
    );
}

export default LeftContainer;