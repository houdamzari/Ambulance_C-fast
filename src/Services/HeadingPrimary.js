import React from 'react';
import styled from "styled-components";
import {theme} from "../theme";


const Container = styled.div`
position: relative;
  text-align: center;
  padding-bottom: 5rem;
  
    h1{
      font-size: 2.5rem;
      text-transform: uppercase;
      color: ${theme.pink};
    }

`
function HeadingPrimary({id}) {
    return (
        <Container>
            <h1 id={id}>what can we provide you with ?</h1>
        </Container>
    );
}

export default HeadingPrimary;