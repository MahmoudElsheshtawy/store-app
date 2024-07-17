import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { SidebarContext } from "../contexts/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { cartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
const Sidebar = () => {
  const { cart } = useContext(cartContext);
  console.log(cart);
  const { open, handleClose } = useContext(SidebarContext);
  return (
    <div
      className={` ${
        open ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full
    shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-200
    z-20 px-4 lg:px-[35px] overflow-scroll
  `}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag (`${cart.amount}`)</div>
        <div
          onClick={handleClose}
          className="
        cursor-pointer  w-8 h-8 flex justify-center items-center
       "
        >
          <IoMdArrowForward />
        </div>
      </div>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
