import React from 'react';
import styled from "styled-components";
import {theme} from "../theme";
import logo from "../Footer/media/logo.png";
const Container = styled.div`
    a{
      text-decoration: none;
    color:black;
      &:hover{
        color: ${theme.pink};
      }
    }
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
                <a href='#Home'><li className="list-item">Home</li></a>
                <a href='#About'><li className="list-item">About</li></a>
                <li className="list-item"><img src={logo} alt="logo"/></li>

              <a href='#services'>  <li className="list-item">Services</li></a>
                <a href='#contact'><li className="list-item">Contact</li></a>
            </ul>
        </Container>
    );
}

export default Navbar;