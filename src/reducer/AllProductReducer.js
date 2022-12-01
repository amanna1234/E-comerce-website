import React from "react";

export default function AllProductReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "DATA_FETCHED":
      return {
        ...state,
        isLoading: false,
        allProducts: action.payload,
        filteredProducts: action.payload,
        allProductsForSearch: action.payload,
      };

    case "DATA_FETCHED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SEARCH":
      let searchVal = action.payload[0].toLowerCase();
      let allProductList = action.payload[1];
      let searchFilter = allProductList.filter((i) => {
        return i.title.toLowerCase().includes(searchVal);
      });
      return {
        ...state,
        filteredProducts: searchFilter,
      };

    case "all":
      return {
        ...state,

        filteredProducts: action.payload,
      };

    case "electronics":
      let filteredproducteletconics = action.payload.filter((i) => {
        return i.category == "electronics";
      });
      return {
        ...state,

        filteredProducts: filteredproducteletconics,
      };

    case "jewelery":
      let filteredproductjewelery = action.payload.filter((i) => {
        return i.category == "jewelery";
      });
      return {
        ...state,

        filteredProducts: filteredproductjewelery,
      };

    case "menscloth":
      let filteredproductmens = action.payload.filter((i) => {
        return i.category == "men's clothing";
      });
      return {
        ...state,

        filteredProducts: filteredproductmens,
      };

    case "womenscloth":
      let filteredproductwomens = action.payload.filter((i) => {
        return i.category == "women's clothing";
      });
      return {
        ...state,

        filteredProducts: filteredproductwomens,
      };

    case "SORT_CHANGE":
      return { ...state, sortchange: action.payload };

    case "lowest":
      let allproductlow = action.payload;
      let sortlow = allproductlow.sort((a, b) => {
        return a.price - b.price;
      });
      return {
        ...state,
        filteredProducts: sortlow,
      };

    case "highest":
      let allproducthigh = action.payload;
      let sorthigh = allproducthigh.sort((a, b) => {
        return b.price - a.price;
      });
      return {
        ...state,
        filteredProducts: sorthigh,
      };

    case "popular":
      return {
        ...state,
        filteredProducts: action.payload,
      };

    case "a-z":
      let allproductaz = action.payload;
      let sortaz = allproductaz.sort((a, b) => a.title.localeCompare(b.title));
      return {
        ...state,
        filteredProducts: sortaz,
      };

    case "PRICE_RANGE_SET":
      let price = action.payload[0];
      let filteredproducts = action.payload[1];

      let filteredpriceproducts = filteredproducts.filter((i) => {
        return i.price * 81 <= price;
      });
      return {
        ...state,
        filteredProducts: filteredpriceproducts,
      };
  }
}
