import { createContext, useState } from "react";

export const cartContext = createContext();
// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //add funtion to cart
  const addToCart = (product, id) => {
    const newIteim = { ...product, amount: 1 };

    //check if the product has already been added
    const cartitem = cart.find((item) => {
      return item.id === id;
    });
    //  if the product has already
    if (cartitem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartitem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newIteim]);
    }
   
  };
  console.log(cart);
  return (
    <cartContext.Provider value={{ cart,addToCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
