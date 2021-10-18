import React from 'react';
import {theme} from "../theme";
import styled from "styled-components";

const Container = styled.div`
    
    padding-bottom: 2rem;
    
`
function HeadingPrimary(props) {
    return (
        <Container>
            <h1>Ambulance C-fast</h1>
        </Container>
    );
}

export default HeadingPrimary;