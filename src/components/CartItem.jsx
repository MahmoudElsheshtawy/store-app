// import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
// eslint-disable-next-line react/prop-types
const CartItem = ({ item }) => {
  const { id, title, price, amount, image } = item;
  return (
    <div className=" flex  ">
      {/* img */}
      <div className=" w-full min-h-[150px] flex items-center bg-slate-100 gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        {/*======= info for product===== */}
        <div className=" w-full flex flex-col ">
          <div className="mb-2 flex justify-between items-center">
            <Link
              to={`/product/${id}`}
              className=" text-sm uppercase font-medium max-w-[240px]
         text-primary hover:underline "
            >
              {title}
            </Link>
            <div className="text-xl cursor-pointer  ">
              <IoMdClose className=" text-gray-500 hover:text-red-500 transition" />
            </div>
           
          </div>
          {/*======= info for product===== */}
      
          {/* ==========qty============ */}
          <div className=" flex gap-x-2 h-[36px] text-sm">
           {/* quty */}
           <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
            <div className="flex-1 cursor-pointer  flex items-center justify-center px-2"><IoMdRemove/></div>

              <div className="h-full flex items-center justify-center px-2">{amount}</div>

              <div className="flex-1 cursor-pointer h-full flex items-center justify-center px-2"><IoMdAdd/></div>

           </div>
           {/* quty */}
           <div className="flex-1 flex  items-center">$ {price}</div>
           <div className="flex-1 flex justify-end items-center font-medium text-primary px-1">{`$ ${parseFloat(price* amount).toFixed(2)}`} </div>


          </div>
          {/* ==========qty============ */}
        </div>
      </div>
    </div>
  );

};

export default CartItem;
