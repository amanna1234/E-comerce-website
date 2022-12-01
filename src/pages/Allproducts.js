import React from 'react'
import styled from 'styled-components'
import AllProductList from '../components/AllProductList';
import AllProductsFilterSection from '../components/AllProductsFilterSection'
import { useProductContextHook } from '../context/AllProductContext'





export default function Allproducts() {
    const {filteredProducts} = useProductContextHook();

  return (
    <>
     <AllProductsFilterSection/>
     <AllProductList/>
    </>
   
  )
}
