import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();
// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const initialvalue = localStorage.getItem("shoppingcart")
  ? JSON.parse(localStorage.getItem("shoppingcart"))
  : [];
  const [cart, setCart] = useState(initialvalue);
// count pages in cart
const [itemAmount, setItemAmount ]= useState(0)
// total price of cart
const [totalPrice, setTotalPrice ]= useState(0)
//fun for total price calculation
useEffect(()=>{

  const price = cart.reduce((acc, item)=>{
    return acc + item.price * item.amount
    },0)
    setTotalPrice(price)

},[cart])
// count items in cart
useEffect(()=>{
if(cart){
  const amount =cart.reduce((acc, item)=>{
    return acc + item.amount
    },0)
    setItemAmount(amount)
}
},[cart])

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

  // remove from cart
  const removeItem = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  // remove Cart
  const removeCart = () => {
    setCart([]);
  };
  // increaseItem ++ amount

  const increaseItem = (id) => {
    const Item = cart.find((item) => item.id === id);
    addToCart(Item, id);
  };

  // decreaseItem -- amount
  const decreaseItem = (id) => {
    const Item = cart.find((item) => {
      return item.id === id;
    });
    if (Item) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: Item.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (Item.amount < 2) {
      removeItem(id);
    }
  };
 
  
  useEffect(() => {
    //create local
    localStorage.setItem("shoppingcart", JSON.stringify(cart));
  }, [cart]);
  return (
    <cartContext.Provider
      value={{
        cart,
        decreaseItem,
        increaseItem,
        removeItem,
        removeCart,
        addToCart,
        itemAmount,
        totalPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
