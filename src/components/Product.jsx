// import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Product = ({ product }) => {
  console.log(product);
  // eslint-disable-next-line react/prop-types
  const { id, image, category, title, price } = product;
  return (
    <>
    <div>
    <div className="  border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition flex flex-col">
        {/* img */}
        <div className=" w-full h-full flex justify-center ">
          <div className=" w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300 cursor-pointer"
              src={image}
              alt="product"
            />
          </div>
        </div>
        {/* button */}
        <div className="absolute top-6 -right-11 group-hover:right-4 p-2  flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all ">
          <button>
            <div  className="flex justify-center items-center w-12 h-12 text-white bg-slate-600">
              <BsPlus className=" text-2xl" />
            </div>
          </button>
          <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl">
          <BsEyeFill/>
          </Link>
        </div>
      </div>
      {/* information of products */}
      <div>
        <div className=" text-sm capitalize text-gray-500"> {category}</div>
        <Link to={`/product/${id}`}>
        <h2 className=" font-semibold mb-1"> {title}</h2>
        </Link>
        <div className=" font-semibold">${price}</div>
      </div>
    </div>
  
    </>
  );
};

export default Product;
