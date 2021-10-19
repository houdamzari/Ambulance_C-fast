import React from 'react';
import styled from "styled-components";
import {theme} from "../theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`


  .icon {
    height: 50px;
    width: 50px;
    border: 3px solid white;
    border-radius: 50%;
    text-align: center;
    color: white;
    display: inline-block;
    vertical-align: middle;
    line-height: 65px;
    margin-right: 10px;
    z-index: 10;
    -moz-box-shadow: 4px 0px 20px rgba(68, 68, 68, 0.4);
    -webkit-box-shadow: 4px 0px 20px rgba(68, 68, 68, 0.4);
    box-shadow: 4px 0px 20px rgba(68, 68, 68, 0.4);
    cursor:pointer;
    position: relative;
    top: 25rem;
    left: 8rem;
  }
  .fa{
    position: relative;
    cursor:pointer;

  }
  a{
    cursor: pointer;
  }

`
function IconBar(props) {

    return (
        <Container>
            <div className="icon_group">
                <a href='#' className="icon facebook"><FontAwesomeIcon className="fa fa-facebook fa-2x" icon={faFacebook}></FontAwesomeIcon>
                    <div className="background_circle"></div>
                </a>
                <a className="icon twitter"><FontAwesomeIcon className="fa fa-twitter fa-2x" icon={faTwitter}></FontAwesomeIcon>
                    <div className="background_circle"></div>
                </a>
                <a className="icon instagram"><FontAwesomeIcon className="fa fa-instagram fa-2x" icon={faInstagram}></FontAwesomeIcon>
                    <div className="background_circle"></div>
                </a></div>
        </Container>
    );
}

export default IconBar;