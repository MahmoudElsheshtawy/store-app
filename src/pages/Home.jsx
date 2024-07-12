import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
const Home = () => {
  const { products } = useContext(ProductContext);

  console.log(products);

  return (
    <div>
      <section>
        <div className="container mx-auto"></div>
      </section>
    </div>
  );
};

export default Home;
