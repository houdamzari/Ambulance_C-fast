import React from 'react';
import styled from "styled-components";
import {theme} from "../theme";

const Wrappper = styled.div`
      
    display: flex;
  flex-direction: row;
  gap: 10rem;
  justify-content: center;
  background: transparent;
  position: relative;
  top: 3rem;
`
const Absolute =styled.div`
  background-color: ${theme.lightgrey};
  height: 100%;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 30%, 0% 100%);
  position: absolute;
  z-index: -1;
  top: 5.67rem;
  left: 0;
`

function Container({children}) {
    return (
        <>
            <Absolute/>
        <Wrappper>
            {children}
        </Wrappper>
        </>
    );
}

export default Container;