import React from 'react';
import {theme} from "../theme";
import styled from "styled-components";

const Container = styled.div`
    
    padding-bottom: 2rem;
    
`
function HeadingPrimary({id}) {
    return (
        <Container>
            <h1 id={id}>Ambulance C-fast</h1>
        </Container>
    );
}

export default HeadingPrimary;