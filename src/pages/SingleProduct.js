import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Singleproductquantity from "../components/SingleProductQuantity";
import Star from "../components/Star";
import { useProductContextHook } from "../context/AllProductContext";
import { useCartcontexthook } from "../context/CartContext";

const Container = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  
`;
const Row = styled.div`
  width: 100%;
  border: 3px solid #212529;
  position: relative;
`;

const Column = styled.div`
  padding: 0;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 450px;
 
  
`;

const Image = styled.img`
  width: 50%;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  min-height: 450px;
  padding: 10px;
  border-left: 2px solid #212529;

  @media (max-width : 768px) {
    border-left: none;
    border-top: 2px solid #212529;
  }
`;


const Title = styled.div`
 font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #212529;
  margin: 5px 0;
`

const Price = styled.div`
 font-family: "Ubuntu", sans-serif;
 font-size: 1.2rem;
 margin: 5px 0;
 
`

const Mrp = styled.div`
font-family: "Ubuntu", sans-serif;
opacity: 0.8;
 margin: 5px 0;
`

const Description = styled.p`

`

const Stock = styled.div`

`

const Buybtn = styled.button`
border: none;
color: white;
background-color: #212529 ;
width: 150px;
height: 35px;
margin: 10px 0;
`

const Badge = styled.div`
  position: absolute;
  width: fit-content;
  height: 18px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: #212529;
  color: white;
  margin: 0;
  font-size: 0.7rem;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
`;

export default function SingleProduct() {
  const { allProducts } = useProductContextHook();
  const {addtocartfunc}  = useCartcontexthook()

  const productid = useParams();

  

  const product = allProducts.filter((i) => {
    return i.id == productid.id;
  });

  

  
  let increasequantity = ()=>{
    if(quantity == 5){
      setquantity(5)
    }else{
      setquantity(quantity+1)
      
    }
  }

  const [quantity , setquantity] = useState(1);

 let decreasequantity = ()=>{
    if(quantity == 1){
      setquantity(1)
    }else{
      setquantity(quantity-1)
    }
  }

  if (product[0] == undefined) {
    return <h1>loading</h1>;
  }
  return (
    <Container className="container-fluid">
    
      <Row className="row d-flex justify-content-center ">
      <Badge>{product[0].category}</Badge>
        <Column className="col-10 col-md-5 col-lg-5 d-flex align-items-center">
          <ImageContainer>
          
            <Image src={product[0].image} />
          </ImageContainer>
        </Column>
        <Column className="col-10 col-md-7 col-lg-7">
          <DetailsContainer>
            <Title>{product[0].title}</Title>
            <Star star = {product[0].rating.rate}/>
            <Price>Price: {Math.floor(product[0].price*81)}/-</Price>
            <Mrp>MRP :<del>{Math.floor(product[0].price* 81 * 1.3)}/-</del> </Mrp>
            <Description>{product[0].description}</Description>
            <Stock>Availability:<strong>In stock</strong> </Stock>
            <Singleproductquantity quantity = {quantity}  increasequantity = {increasequantity} decreasequantity= {decreasequantity}/>
            <Link to={"/cart"}>
            <Buybtn  onClick={()=>addtocartfunc([product[0].title, product[0].price*81, quantity, product[0].image])}>BUY</Buybtn>
            </Link>
            
          </DetailsContainer>
        </Column>
      </Row>
    </Container>
  );
}
