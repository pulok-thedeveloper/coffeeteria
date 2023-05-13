import { useEffect, useState } from "react";
import ProductCard from "../../Menu/Product/ProductCard";
import { Link } from "react-router-dom";

const ShortMenu = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <div className="min-h-screen p-16 bg-secondary">
      <div className="flex flex-col gap-5 items-center tracking-wider mb-10">
        <button className="font-jost text-xs bg-primary text-white px-2 py-1 uppercase font-medium">
          Special Menu
        </button>
        <h2 className="font-bebas text-4xl text-white">Coffee Popular Menu</h2>
      </div>
      <div className="grid grid-cols-3 gap-x-10 gap-y-32">
        {products?.slice(0, 3).map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      <div className="flex justify-center mt-28">
        <Link to="/menu" className="font-jost text-sm tracking-wider py-2 px-5 border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition uppercase">
          Show all
        </Link>
      </div>
    </div>
  );
};

export default ShortMenu;
