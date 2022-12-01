import React from 'react';
import styled from 'styled-components';

const Container  = styled.div`
height: 80vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`

const Message = styled.h2`

` 

export default function NoCartItems() {
  return (
    <Container>
        <Message>
            No items in cart
        </Message>
    </Container>
  )
}
