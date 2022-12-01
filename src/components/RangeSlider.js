import React, { useState } from 'react';
import styled from 'styled-components';
import { useProductContextHook } from '../context/AllProductContext';


const Range = styled.input`
margin: 0 5px;
width: 60%;
`

const Price = styled.div`

`

export default function RangeSlider() {
    const [price, setprice] = useState(100000);

    const {pricerangefunc} = useProductContextHook();

    const priceset = (e) =>{
        setprice(e.target.value);
        pricerangefunc(e.target.value)
        
    }
  return (
    <>
     <Price>Price:{price}/-</Price>
    <Range  type="range" value={price} min="1" max="100000" onInput={priceset}  className="slider" id="myRange"/>
    </>
  )
}
