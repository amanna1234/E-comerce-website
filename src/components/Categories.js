import React from "react";
import styled from "styled-components";
import electronics from "../images/electronics.png";
import menscloth from "../images/menscloth.png";
import womenscloth from "../images/womencloth.png";
import all from "../images/all.png";
import cart from "../images/cart.png";
import jewelery from "../images/jewelery.png";
import { useProductContextHook } from "../context/AllProductContext";
import { Link } from "react-router-dom";

const Title = styled.div`
  font-family: "Ubuntu", sans-serif;
  text-align: center;
  font-size: 2rem;
 margin-top: 10px;

  @media (max-width:500px) {
    font-size: 1rem;
    
  }
`;

const Column = styled.div`
  padding: 10px;
`;

const Cardcontainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Cardimage = styled.img`
  width: 70%;
`;

const Button = styled.button`
  border: none;
  background-color: #212529;
  color: white;
  position: absolute;
  bottom: 20px;
  height: 35px;
  width: 167px;
  opacity: 0.9;
`;

export default function Categories() {
  const { categoryFilterChange } = useProductContextHook();
  return (
    <>
      <Title>CATEGORIES</Title>
      <div className="container">
        <div className="row">
          <Column className="col-6 col-md-4 col-lg-4">
            <Link to={"/allproducts"}>
              <Cardcontainer
                onClick={() => {
                  categoryFilterChange("electronics");
                }}
              >
                <Cardimage src={electronics} />

                <Button>ELECTRONICS</Button>
              </Cardcontainer>
            </Link>
          </Column>
          <Column className="col-6 col-md-4 col-lg-4">
            <Link to={"/allproducts"}>
              <Cardcontainer
                onClick={() => {
                  categoryFilterChange("jewelery");
                }}
              >
                <Cardimage src={jewelery} />

                <Button>JEWELERY</Button>
              </Cardcontainer>
            </Link>
          </Column>
          <Column className="col-6 col-md-4 col-lg-4">
            <Link to={"/allproducts"}>
              <Cardcontainer
                onClick={() => {
                  categoryFilterChange("menscloth");
                }}
              >
                <Cardimage src={menscloth} />

                <Button>MEN'S CLOTHING</Button>
              </Cardcontainer>
            </Link>
          </Column>
          <Column className="col-6 col-md-4 col-lg-4">
            <Link to={"/allproducts"}>
              <Cardcontainer
                onClick={() => {
                  categoryFilterChange("womenscloth");
                }}
              >
                <Cardimage src={womenscloth} />

                <Button>WOMEN'S CLOTHING</Button>
              </Cardcontainer>
            </Link>
          </Column>

          <Column className="col-6 col-md-4 col-lg-4">
          <Link  to={"/allproducts"} >
            <Cardcontainer  onClick={() => {
                  categoryFilterChange("all");
                }}>
              <Cardimage src={all} />

              <Button>ALL PRODUCTS</Button>
            </Cardcontainer>
            </Link>
          </Column>
          <Column className="col-6 col-md-4 col-lg-4">
          <Link  to={"/cart"} >
            <Cardcontainer>
              <Cardimage src={cart} />

              <Button>CART</Button>
            </Cardcontainer>
            </Link>
          </Column>
        </div>
      </div>
    </>
  );
}
