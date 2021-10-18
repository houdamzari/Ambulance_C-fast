import React from 'react';
import styled from "styled-components";
import Ambulance from "./Ambulance";
import Container from "./Container";
import Navbar from "../Navbar/Navbar";
import HeadingPrimary from "./HeadingPrimary";
import Description from "./Description";
import Spacer from "../Utilities/Spacer";

const LeftContainer = styled.div`
  position: relative;
   
    
`
function Header(props) {
    return (
        <>
        <Navbar />
        <Container>
            <LeftContainer >
                <Spacer margin="5rem"/>
                <HeadingPrimary/>
            <Description />
            </LeftContainer>

            <Ambulance/>
        </Container> </>   );
}

export default Header;