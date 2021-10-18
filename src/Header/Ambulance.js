import React from 'react';
import styled from "styled-components";
import ambulance from "./media/Ambulances.png";

const Container = styled.div`
  background: linear-gradient(180deg, rgba(202,100,109,1) 31%, rgba(100,147,184,1) 93%);   border-radius: 50%;
  height: 65vh;
  width: 30vw;
  position: relative;
  z-index: 1;
  
  img{
      position: relative;
      height: 22rem;
      width: 27rem;
      right: 1.5rem;
      top: 1rem;
    }
    
`
function Ambulance(props) {
    return (

        <Container>

            <img src={ambulance} alt='Ambulance'/>
        </Container>
    );
}

export default Ambulance;