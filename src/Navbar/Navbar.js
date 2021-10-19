import React from 'react';
import styled from "styled-components";
import {theme} from "../theme";
import logo from "../Footer/media/logo.png";
const Container = styled.div`

    ul{
      display: flex;
      flex-direction: row;
      gap: 10rem;
      justify-content: center;
      padding: .7rem;
      border-bottom: 1px solid ${theme.pink};
    }
    .list-item{
      list-style: none;
      font-weight: 500;
      font-size: 1.3rem;
      font-family: 'popins', sans-serif;
    }
    img{
      height: 3rem;
      width: 3rem;
    }
`
function Navbar(props) {
    return (
        <Container>
            <ul>
                <li className="list-item">Home</li>
                <li className="list-item">About</li>
                <li className="list-item"><img src={logo} alt="logo"/></li>

                <li className="list-item">Services</li>
                <li className="list-item">Contact</li>
            </ul>
        </Container>
    );
}

export default Navbar;