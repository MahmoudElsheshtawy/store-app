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
    return <section className="h-[100vh] flex items-center justify-center" >loding...</section>
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
          <button className="bg-primary py-4 px-8 text-white"
           onClick={()=>addToCart(product , product.id)}
          
          >add to cart</button>
        </div>



      </div>
 
    
    </div>
  </section>;
};

export default ProductDetails;
