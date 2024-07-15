import { createContext, useState } from "react";

export const cartContext = createContext()
// eslint-disable-next-line react/prop-types
const CartProvider = ({children}) => {
  const [cart ,setCart] =useState([])
  const addToCart =()=>{
    console.log("addToCart");
  }
  return <cartContext.Provider value={{addToCart}}>
    {children}

  </cartContext.Provider>;
};

export default CartProvider;
