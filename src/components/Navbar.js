import { ShoppingCart } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartcontexthook } from "../context/CartContext";

const Cartcontainer = styled.div`
  display: flex;
  position: relative;
`;

const Cartvalue = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: gold;
  right: -5px;
  top: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 1px solid brown;
`;

export default function Navbar() {
  const { cartitems } = useCartcontexthook();
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          E-CART
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto  mb-lg-0 mb-0 ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/allproducts"
              >
                All products
              </Link>
            </li>
          </ul>
          <Link to="/cart">
            <Cartcontainer
              onClick={() => {
                document.body.scrollTop = 0;

                document.documentElement.scrollTop = 0;
              }}
            >
              <ShoppingCart style={{ fontSize: "33px", color: "white" }} />
              <Cartvalue>{cartitems.length}</Cartvalue>
            </Cartcontainer>
          </Link>
        </div>
      </div>
    </nav>
  );
}
