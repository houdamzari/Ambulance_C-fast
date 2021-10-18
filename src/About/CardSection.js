import React from 'react';
import styled from "styled-components";
import Spacer from "../Utilities/Spacer";
import Card from "./Card/Card";
import ambulance from "./media/ambulance.png";
import nurse from "./media/nurse.png";
import equipment from "./media/equipment.png";



const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3,17rem) ;

  grid-column-gap: 10rem ;
  padding-left: 8%; 
  
    
  
`

function CardSection(props) {
    const data = [
        {image:ambulance,title: 'C-fast' ,list:['bla','bla','bla']},
        {image:equipment,title: 'Private & Secure' ,list:['bla','bla','bla']},
        {image:nurse,title: 'Available staff 24/7' ,list:['bla','bla','bla']}

    ];
    return     (
        <Container>

            { data.map(p=> <Card image={p.image} title={p.title} list={p.list}/> )}
        </Container>
    );
}

export default CardSection;