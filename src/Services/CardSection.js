import React from 'react';
import styled from "styled-components";
import Spacer from "../Utilities/Spacer";
import Card from "./Card/Card";
import ambulance from "./media/ambulance.png";
import nurse from "./media/nurse.png";
import equipment from "./media/equipment.png";
import HeadingPrimary from "./HeadingPrimary";



const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3,17rem) ;

  grid-column-gap: 10rem ;
  padding-left: 8%; 
  
    
  
`

function CardSection(props) {
    const data = [
        {image:ambulance,title: 'C-fast' ,description:'Our company has multiple emergency vehicles all over the town that can serve you anytime you contact us as soon as possible.'},
        {image:equipment,title: 'Private & Secure', description:'Our vehicules are fully furnished with all the equipments that might be necessary for emergency cases.  '},
        {image:nurse,title: 'Available staff 24/7' ,description:'Our clients might require medical assistance (doctor/nurse) whenever it is necessary for 24 h/7.'}

    ];
    return     (
        <>
            <HeadingPrimary  id='services'/>

        <Container>
            { data.map(p=> <Card image={p.image} title={p.title}  description={p.description} /> )}
        </Container>
        </> );
}

export default CardSection;