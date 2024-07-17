import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CartItem = ({ item }) => {
  const { id, title, price, amount, image } = item;
  return (
    <div className=" flex ">
      {/* img */}
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
      </div>
      <div>
        <Link
          to={`/product/${id}`}
          className=" text-sm uppercase font-medium max-w-[240px]
         text-primary hover:underline "
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
