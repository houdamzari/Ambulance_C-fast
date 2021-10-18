import React from 'react';
import {theme} from "../theme";
import styled from "styled-components";

const Container = styled.div`
  font-weight: 100;
  width: 70%;
    
`
function Description(props) {
    return (
        <Container>
            Providing private ambulances, repatriation and event medical cover.
        </Container>
    );
}

export default Description;