import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductContextHook } from "../context/AllProductContext";
import { useCartcontexthook } from "../context/CartContext";
import NoCartItems from "./NoCartItems";

const Container = styled.div`
  margin-top: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
`;

const Card = styled.div`
  border: 3px solid #212529;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CardImageContainer = styled.div`
  height: 250px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardImage = styled.img`
  width: 55%;
`;

const CardBuyContainer = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(33, 37, 41, 0.2);
  -webkit-box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.4);
`;

const Title = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  color: #212529;
`;

const Price = styled.div`
  font-family: sans-serif;
`;

const BuyBtn = styled.button`
  width: 60%;
  height: 30px;
  border: none;
  background-color: #212529;
  color: white;
  margin: 3px 0;
`;
const Badge = styled.div`
  position: absolute;
  width: fit-content;
  height: 15px;
  padding-left: 3px;
  padding-right: 3px;
  background-color: #212529;
  color: white;
  margin: 0;
  font-size: 0.5rem;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
`;

const Quantity = styled.div`

`

export default function CartItemsList() {
    const { cartitems , cartItemDelete} = useCartcontexthook();
    console.log(cartitems);

    if(cartitems.length == 0){
        return <NoCartItems/>
    }
  return (
    <Container className="container-md ">
      <Row className="row">
        {cartitems.map((items, index) => {
          return (
            <Column key={index} className="col-9 col-md-4 col-lg-3 ">
              <Card>
                {/* <Badge>{items.category.toUpperCase()}</Badge> */}
                <CardImageContainer>
                  <CardImage src={items.image} />
                </CardImageContainer>

                <CardBuyContainer>
                  <Title>{items.name.slice(0, 15)}...</Title>
                  <Price>Price: Rs{Math.floor(items.price )}/-</Price>
                  <Quantity>QTY: <strong> {items.quantity}</strong></Quantity>
                  <Price>Amount:<strong>Rs{Math.floor(items.price  *items.quantity)}/-</strong> </Price>
                
                    <BuyBtn onClick={()=>{cartItemDelete(index)}}>REMOVE</BuyBtn>
              
                </CardBuyContainer>
              </Card>
            </Column>
          );
        })}
      </Row>
    </Container>
  );
}
