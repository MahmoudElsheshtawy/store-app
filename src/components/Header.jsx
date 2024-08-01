import { useContext, useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";

import { SidebarContext } from "../contexts/SidebarContext";
import { cartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
const Header = () => {
  const [header ,setHeader] =useState(false);
  const { itemAmount } = useContext(cartContext);
  const { open, setOpen } = useContext(SidebarContext);


  useEffect(()=>{
 window.addEventListener('scroll',()=>{
   window.scrollY >60 ?setHeader(true):setHeader(false);
 })



  },[])


  return (
    <header className={`${header ? 'bg-white py-4 shadow-md': 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className="flex container mx-auto items-center justify-between h-full">
        <Link to={"./"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>
        {/* ==========bag======== */}
        <div
          className="cursor-pointer  flex relative "
          onClick={() => setOpen(!open)}
        >
          <BsBag className="text-2xl " />

          <div className="bg-slate-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
            {itemAmount}
          </div>
        </div>
        {/* ==========bag======== */}
      </div>
    </header>
  );
};

export default Header;
