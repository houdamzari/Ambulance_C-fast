import React from 'react';
import styled from "styled-components";
import {theme} from "../theme";
import Container from "./Container";
import illustration from "./media/illustration.svg";

const Wrapper = styled.div`

  .illustration{
    position: relative;
  width: 40rem;
  height: 40rem;
    top: -4rem;
    left: 6rem;
}

`
function Illustration(props) {
    return (
        <Wrapper>
            <img className='illustration' src={illustration} alt="illustration"/>
        </Wrapper>
    );
}

export default Illustration;