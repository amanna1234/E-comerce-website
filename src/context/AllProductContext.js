import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/AllProductReducer";

const ProductContext = createContext();

const initialstate = {
  isLoading: false,
  isError: false,
  allProducts: [],
  filteredProducts: [],
  allProductsForSearch: [],
  sortchange: "popular",
};

function AllProductContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const API = "https://fakestoreapi.com/products/";

  const getProductsFromApi = async (url) => {
    dispatch({ type: "LOADING" });
    try {
      let ApiItems = await axios.get(url);
      let ApiData = await ApiItems.data;
      dispatch({ type: "DATA_FETCHED", payload: ApiData });
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  };

  useEffect(() => {
    getProductsFromApi(API);
  }, []);

  const searchChange = (searchvalue) => {
    dispatch({
      type: "SEARCH",
      payload: [searchvalue.target.value, [...state.allProductsForSearch]],
    });
  };

  const categoryFilterChange = (filtername) => {
    dispatch({ type: filtername, payload: [...state.allProducts] });
    document.body.scrollTop = 0; // For Safari
        
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const sortingfunc = (e) => {
    dispatch({ type: "SORT_CHANGE", payload: e.target.value });
  };

  const pricerangefunc = (pricerange)=>{
    console.log(pricerange);
    dispatch({type:"PRICE_RANGE_SET", payload:[pricerange,[...state.allProductsForSearch]]})
  }

  useEffect(() => {
    dispatch({ type: state.sortchange, payload: [...state.allProducts] });
  }, [state.sortchange]);

  return (
    <ProductContext.Provider
      value={{ ...state, searchChange, categoryFilterChange, sortingfunc , pricerangefunc}}
    >
      {children}
    </ProductContext.Provider>
  );
}

const useProductContextHook = () => {
  return useContext(ProductContext);
};

export { AllProductContextProvider, useProductContextHook };
