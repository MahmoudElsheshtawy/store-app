import React from "react";
import ba from "../img/ba.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className=" bg-purple-400 h-[750px] bg-hero bg-no-repeat bg-center bg-cover py-24 ">
        <div className="container mx-auto flex justify-around h-full ">
          {/* text */}
          <div className="flex flex-col justify-center ">
            <div className=" font-semibold flex items-center uppercase">
              <div className=" w-10 h-[2px] bg-slate-600 mr-3"></div>
              New Trend
            </div>
            <h1 className="text-[60px] leading-[1.1] font-light mb-4 ">AUTUMN SALE STYLISH <br/>
            <span className=" font-semibold">Store</span>
             </h1>
             <Link to={'/'} className=" self-start uppercase font-semibold border-b-2 border-primary">
               Discover More
             </Link>
          </div>
          {/* text */}
          {/* img */}
          <div className=" hidden lg:block">
            <img className="w-[400px]" src={ba} alt="" />
          </div>
          {/* img */}
        </div>
      </section>
    </>
  );
};

export default Hero;
