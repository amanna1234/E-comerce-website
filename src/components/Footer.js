import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
background-color:#050606;
height: 70px;
margin-top: 10px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: white;
font-size: 0.8rem;
`

const Contact = styled.div`
color: white;
`

export default function Footer() {
  return (
    <Container>
    <div>Contact: 8050259088</div>
    <div>Email: KARL1234470@GMAIL.COM</div>
    </Container>
  )
}
