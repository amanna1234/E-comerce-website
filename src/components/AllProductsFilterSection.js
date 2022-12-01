import React from "react";
import styled from "styled-components";
import { useProductContextHook } from "../context/AllProductContext";
import RangeSlider from "./RangeSlider";

const FilterContainer = styled.div`
position: sticky;
top:53px;
z-index: 10000;
`;

const FilterRow = styled.div``;
const FiltereColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  background-color: #212529;
  color: white;
  cursor: pointer;

  border: 1px dashed rgba(255, 255, 255, 0.1);

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Search = styled.input`
  border: 2px solid gold;
  width: 100%;
  height: 80%;
  padding-left: 10px;
`;

const Select = styled.select`
  height: 80%;
  background-color: #212529;
  width: 100%;
  color: white;
  border: 1px solid white;
`;

const Option = styled.option``;

export default function AllProductsFilterSection() {
  const { filteredProducts, searchChange, categoryFilterChange , sortingfunc} =
    useProductContextHook();

    const FilterChange = (filtername) =>{
      categoryFilterChange(filtername)
      document.body.scrollTop = 0; // For Safari
        
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

  return (
    <FilterContainer className="container-fluid">
      <FilterRow className="row">
        <FiltereColumn
          className="col-4 col-lg-4 col-md-4"
          onClick={() => {
            FilterChange("all");
          }}
        >
          All
        </FiltereColumn>

        <FiltereColumn
          className="col-4 col-lg-4 col-md-4"
          onClick={() => {
            FilterChange("electronics");
          }}
        >
          Electronics
        </FiltereColumn>

        <FiltereColumn
          className="col-4 col-lg-4 col-md-4"
          onClick={() => {
            FilterChange("jewelery");
          }}
        >
          Jewelery
        </FiltereColumn>

        <FiltereColumn
          className="col-4 col-lg-4 col-md-4"
          onClick={() => {
          FilterChange("menscloth");
          }}
        >
          Men's clothing
        </FiltereColumn>

        <FiltereColumn
          className="col-4 col-lg-4 col-md-4"
          onClick={() => {
          FilterChange("womenscloth");
          }}
        >
          Women's clothing
        </FiltereColumn>

        <FiltereColumn className="col-4 col-lg-4 col-md-4">
          <Select onClick={sortingfunc}>
            <Option value="popular">Popular</Option>
            <Option value="highest">Price highest</Option>
            <Option value="lowest">price lowest</Option>
            <Option value="a-z">A-Z</Option>
          </Select>
        </FiltereColumn>

        <FiltereColumn className="col-8 col-lg-8 col-md-8">
          <RangeSlider />
        </FiltereColumn>

        <FiltereColumn className="col-4 col-lg-4 col-md-4">
          <Search
            placeholder="Search"
            onChange={(e) => {
              searchChange(e);
            }}
          />
        </FiltereColumn>
      </FilterRow>
    </FilterContainer>
  );
}
