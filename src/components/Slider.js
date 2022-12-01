import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import samsung from "../images/samsung.jpg";
import wd from "../images/wd.jpg";

const Buybutton = styled.button`
border: none;
background-color: #212529;
color: white;
width: 150px;
height: 35px;
opacity: 0.9;
z-index: 100;


&:hover{
    background-color: white;
color: #212529;
border: 2px solid #212529;
}

@media (max-width:768px) {
    font-size:0.8rem;
    width: 80px;
height: 20px;
top:25px;
right:0;
position: absolute;
}

@media (max-width:1000px) {
    font-size:0.9rem;
    width: 80px;
height: 25px;


}
`

const Title = styled.h5`


@media (max-width:768px) {
    display: none;
}
`

export default function Slider() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={samsung} className="d-block w-100" alt="..."/>
      <div className="carousel-caption ">
        <Title>Samsung 49-Inch  144Hz Curved Gaming Monitor</Title>
        <Link to={"/singleproduct/14"}>
        <Buybutton>BUY</Buybutton>
        </Link>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={wd} className="d-block w-100" alt="..."/>
      <div className="carousel-caption ">
       
      
        <Link to={"/singleproduct/9"}>
        <Buybutton>BUY</Buybutton>
        </Link>
      
        
      </div>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
