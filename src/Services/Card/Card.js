import React from 'react';
import styled from "styled-components";
import {theme} from "../../theme";
import ambulance from "../media/ambulance.png";
import Spacer from "../../Utilities/Spacer";


const Container = styled.div`

  .card {
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    height: 100%;
    &:hover .card__side--front {
      transform: rotateY(-180deg)!important;
    }
    &:hover .card__side--back {
      transform: rotateY(0);
    }
    &__side {
      height: 20rem;
      transition: all .8s ease;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      backface-visibility: hidden;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 1.5rem 4rem rgba(${theme.darkgrey}, .15);
      &--front {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
      &--back {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

        transform: rotateY(180deg);
        &-1 {
          background-image: linear-gradient(to right bottom, #ffffff, ${theme.lightgrey});
        }
        &-2 {
          background-image: linear-gradient(to right bottom,${theme.blue}, ${theme.lightgrey});
        }&-3 {
           background-image: linear-gradient(to right bottom, ${theme.red}, ${theme.lightgrey});
         }
      }
    }
 
    //Front styling
    &__picture {
      background-size: cover;
      height: 20rem;
      background-blend-mode: screen;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;


      &--1 {
        background-image: linear-gradient(to right bottom, #ffffff, #ffffff);
        border: 1px solid ${theme.lightgrey};
      }
    
    &__heading{
      font-size: 2.8rem;
      font-weight: 380;
      text-align: right;
      color: #ffffff;
      text-transform: uppercase;
      position: absolute;
      top: 12rem;
      right: 2rem;
      width: 75%;


    }
    &__heading-span{
      padding :1rem 1.5rem;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
      &--1{
        background-image: linear-gradient(to right bottom, rgba(${theme.lightgrey}, .85), rgb(255,255,255) .85);
      }
     
    }
    &__details{
      
    }
    &__cta {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 90%;
    }
    &__price-box{
      text-align: center;
      color: #ffffff;
      margin-bottom: 8rem;
      ul{
        width: 80%;
        list-style: none;
        margin: 0 auto;
        li{
          font-size: 1.4rem;
          text-align:center;
          padding: 1rem;
          &:not(:last-child){
            border-bottom: 1px solid black;
          }
        }}
    }
    &__price-only{
      font-size: 1.4rem;
      text-transform: uppercase;
    }
    &__price-value{
      font-size: 6rem;
      font-weight: 100;
    }
  }
    
  }
  .icon{
    position: absolute;
    z-index: 1;
    top: 1rem;
    left: 1rem;
    width: 6rem;
    height: 6rem;
  }
  .heading-primary{
    display: inline-block;
    font-size: 1.8rem;
    color: ${theme.blue};
    position: absolute;
    top: 10rem;
    width:100%;
    text-align: center;

  }
  .iconbackground{
    background-color: ${theme.lightgrey};
    width: 8rem;
    height: 8rem;
    position: absolute;
    top: 1rem;
    border-radius: 50%;
    left: 5rem;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  button{
    background-color: white;
    position: absolute;
    top: 18rem;
    left: 6rem;
    font-size: 1.1rem;
    color: ${theme.grey};
    border: none;
    border-bottom: 1px solid ${theme.grey};
  }
  .description{
    position: relative;
    color: ${theme.grey};
    padding: 8rem 1rem;
    font-size: 1rem;
    text-align: center;
  }
`
function Card({image,title,description,list}) {
    return (
        <Container>

                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1">&nbsp;</div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">The sea explorer</span></h4>
                            <div className="card__details">
                                <div className='iconbackground'>
                                <img className="icon" src={image} alt='' /></div>
                                <h1 className='heading-primary'>{title}</h1>
                            </div>
                            <button>Hover over</button>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className='description'>{description}</p>

                                </div>
                                </div>
                            </div>
                        </div>
            <Spacer margin='10rem' />

        </Container>
    );
}

export default Card;