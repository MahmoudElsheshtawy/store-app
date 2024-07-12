import { createContext, useEffect, useState  } from "react";

export const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fechProduct = async () => {
      const response = await fetch('https://fakestoreapi.com/products');

      const data = await response.json();
      setProducts(data);
      console.log(data);
    };

    fechProduct()
    // console.log("gg");
  }, []);

  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>

}

export default ProductProvider;
