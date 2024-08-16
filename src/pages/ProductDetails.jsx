import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { cartContext } from "../contexts/CartContext";


const ProductDetails = () => {

  const {id} = useParams()
 const {products}= useContext(ProductContext)
 const {addToCart}= useContext(cartContext)
  console.log(id);
  const product = products.find((product) => product.id === parseInt(id));
  console.log(product);
  if (!product) {
   
      return <section className="h-[100vh] flex items-center justify-center" ><div className="loader"></div></section>

  }
  const {  image,description , title, price } = product;

  return <section className=" h-[100vh] pt-20 pb-1 flex items-center">
    <div className=" container mx-auto ">
      {/* wrapper */}
      <div className="flex flex-col lg:flex-row items-center">
     {/* img */}
     <div className=" flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
        <img className=" max-w-[150px] lg:max-w-[300px]" src={image} alt="" />

     </div>
     
        {/* ================================== */}
        {/* info */}
        <div className="flex-1 to-current lg:text-left">
          <h1 className="text-[26px] lg:mx-0 font-medium mb-2  mx-auto">{title}</h1>
          <div className="text-xl font-medium text-green-400 mb-6">$ {price}</div>
          <p className=" mb-8">{description}</p>
          <button
                className="CartBtn"
                // onClick={() => increaseCartQunatity(id)}
                onClick={()=>addToCart(product , product.id)}
              >
                <span className="IconContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                    fill="rgb(17, 17, 17)"
                    className="cart"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                  </svg>
                </span>
                <p className="textbtn">Add to Cart</p>
              </button>
          {/* <button className="bg-primary py-4 px-8 text-white"
           onClick={()=>addToCart(product , product.id)}
          
          >add to cart</button> */}
        </div>



      </div>
 
    
    </div>
  </section>;
};

export default ProductDetails;
