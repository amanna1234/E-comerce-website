import React, { createContext, useContext, useReducer } from 'react'
import Filterreducer from '../reducer/CartReducer';



const cartcontext = createContext();


const initialstate = {
    cartitems : []
  
}

 function Cartcontext({children}) {

  
    
    const [state, dispatch] = useReducer(Filterreducer, initialstate);
    const addtocartfunc = (i)=>{
          dispatch({type:"ADD_CART_ITEMS", payload: [...i, state.cartitems]})
    }

    const cartItemDelete = (i)=>{
        dispatch({type:"DELETE", payload: [i, state.cartitems]})
        
  }

  const clearcart = ()=>{
    dispatch({type:"CLEAR_CART"})
  }

  return (
    <cartcontext.Provider value = {{...state, addtocartfunc, cartItemDelete, clearcart}}>
       {children}
    </cartcontext.Provider>
  )
}



const useCartcontexthook = ()=>{
    return useContext(cartcontext)
}


export {useCartcontexthook, Cartcontext}