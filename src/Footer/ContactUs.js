import React from 'react';
import styled from "styled-components";
import {theme} from "../theme";

const Container = styled.div`
      position: absolute;
  
    .box{
      background-color: transparent;
      border: 1px solid white;
      border-radius: 10px;
      position: absolute;
      width: 10rem;
      z-index: 1;
      top: 22rem;
      left: 63rem;
      height: 3rem;
      text-align: center;
      font-size: 1.3rem;
      color: ${theme.lightgrey};
      vertical-align: middle;
      line-height: 3rem;

    }
  h1{
    display: inline-block;
    position: absolute;
    top: 17rem;
    left: 60rem;
    width: 20rem;
    color: ${theme.lightgrey};

  }

`
function ContactUs(props) {
    return (
        <Container>
            <h1>+212 606 666 101</h1>
            <div className='box'>Request a call</div>
        </Container>
    );
}

export default ContactUs;