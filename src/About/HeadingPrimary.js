import React from 'react';
import styled from "styled-components";
import {theme} from "../theme";


const Container = styled.div`
position: relative;
  top: 2rem;
    h1{
      font-size: 2.5rem;
      text-transform: uppercase;
      color: ${theme.darkgrey};
    }
    h2{
      font-weight: 100;
      padding-top: 2rem;
      width: 70%;
      color: ${theme.grey};

    }

`
function HeadingPrimary(props) {
    return (
        <Container>
            <h1>who are we ?</h1>
            <h2>We are on a mission to be the very best ambulance provider in MOROCCO.  We provide ambulances on a daily basis, for hundreds of events, and we also support private patients. We are led by registered paramedics and are highly capable at moving those with limited mobility or complex medical needs from A to B.</h2>
        </Container>
    );
}

export default HeadingPrimary;