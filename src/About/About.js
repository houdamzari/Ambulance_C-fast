import React from 'react';
import styled from "styled-components";
import {theme} from "../theme";
import Container from "./Container";
import Illustration from "./Illustration";
import HeadingPrimary from "./HeadingPrimary";



function About(props) {
    return (
        <Container>
            <Illustration id='About' />
            <HeadingPrimary />
        </Container>
    );
}

export default About;