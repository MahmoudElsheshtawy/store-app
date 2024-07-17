import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CartItem = ({ item }) => {
  const { id, title, price, amount, image } = item;
  return (
    <div className=" flex bg-slate-400 ">
      {/* img */}
      <div className=" min-h-[150px] flex items-center bg-slate-500 gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div>
        <div className="mb-2 flex justify-between items-center">
        <Link
          to={`/product/${id}`}
          className=" text-sm uppercase font-medium max-w-[240px]
         text-primary hover:underline "
        >
          {title}
        </Link>
        <div>
          <IoMdClose className=" cursor-pointer text-gray-500 hover:text-red-500 transition"/>
        </div>
      </div>


        </div>
      </div>
     
    </div>
  );
};

export default CartItem;
