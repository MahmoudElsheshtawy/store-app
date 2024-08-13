import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { SidebarContext } from "../contexts/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { cartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import { FiTrash2 } from "react-icons/fi";
const Sidebar = () => {
  const { cart,removeCart ,totalPrice,itemAmount} = useContext(cartContext);
  // console.log(cart);
  const { open, handleClose } = useContext(SidebarContext);
  return (
    <div
      className={` ${
        open ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full
    shadow-2xl md:w-[43vw] xl:max-w-[33vw] transition-all duration-200
    z-20 px-2  lg:px-[38px] 
  `}
    >
      <div className="flex  items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
        <div
          onClick={handleClose}
          className="
        cursor-pointer  w-8 h-8 flex justify-center items-center
       "
        >
          <IoMdArrowForward />
        </div>
      </div>
      <div className="  flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      {/* =========Total======= */}
      <div className="bg-slate-100 flex justify-between w-full items-center ">
         <div>
          <div><span>Total:</span>${parseFloat(totalPrice).toFixed(2)}</div>
         </div>
          
          <div onClick={removeCart} className=" cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl ">
            <FiTrash2/>
          </div>
        

 



      </div>
      {/* =========Total======= */}
     
    </div>
  );
};

export default Sidebar;
