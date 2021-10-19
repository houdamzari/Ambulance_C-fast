import React from 'react';
import styled from "styled-components";
import {theme} from "../theme";
const Wrappper = styled.div`
display: flex;
  flex-direction: row;
  gap: 10rem;
  justify-content: space-around;
  
`
const Wrapp =styled.div`
      width: 85vw;
      height: 80vh;
      background-color: ${theme.lightgrey};
    position: absolute;
    z-index:-1;
  left: 6rem;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`
function Container({children}) {
    return (
        <>
            <Wrapp></Wrapp>

            <Wrappper>
            {children}
        </Wrappper>
        </>
    );
}

export default Container;