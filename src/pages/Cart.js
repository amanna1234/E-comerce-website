import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import CartItemsList from '../components/CartItemsList';
import NoCartItems from '../components/NoCartItems';
import { useCartcontexthook } from '../context/CartContext';

const Checkout = styled.div`
background-color: #212529;
height: 50px;
border: 1px dashed rgba(255, 255, 255, 0.1);
display: flex;
align-items: center;
justify-content: space-between;

`

const Totals = styled.div`
color: white;
width: fit-content;
margin: 0 5px;
`

const BtnContainer = styled.div`

`

const Placeorderbtn = styled.button`
border: 2px solid gold;
background-color: white;
color: #212529;
margin: 0 5px;
font-family: "Ubuntu", sans-serif;

@media (max-width :500px) {
     font-size: 0.8rem;
}
`

const Clearcart = styled.button`
border: 2px solid gold;
background-color: white;
color: #212529;
margin: 0 5px;
font-family: "Ubuntu", sans-serif;

@media (max-width :500px) {
     font-size: 0.8rem;
}
`



export default function Cart() {
  const { cartitems , clearcart } = useCartcontexthook();

 
  const [total , settotal] = useState(0)

  useEffect(()=>{
    let count = 0;
    let totalprice = cartitems.map((i)=>{
      return count += (i.price)*(i.quantity)
    })
    settotal(totalprice[totalprice.length-1])
  },[cartitems])

  if(cartitems.length == 0){
      return <NoCartItems/>
  }
  
  return (
    <>
    <Checkout>
    <Totals>
     Total amount: {Math.floor(total)}/-
    </Totals>
    <BtnContainer>
      <Clearcart onClick={clearcart}>
        CLEAR CART
      </Clearcart>
      <Placeorderbtn>
PLACE ORDER
      </Placeorderbtn>
    </BtnContainer>
    </Checkout>
    <CartItemsList/>
    </>
  )
}
