import React from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styled from 'styled-components';


const Qty = styled.div`
border:2px solid black;
width:50px;
display:flex;
justify-content:center;
font-weight:bolder;
margin: 10px 0;
`

const Button = styled.button`
border: none;
background-color: white;
`

export default function Singleproductquantity(props) {
  return (
    <div className='d-flex'>
    <Button onClick={()=>{props.decreasequantity()}}>
        <RemoveCircleIcon/>
    </Button>
    <Qty>{props.quantity}</Qty>
    <Button onClick={()=>{props.increasequantity()}}>
        <AddCircleIcon/>
    </Button>
    </div>
  )
}