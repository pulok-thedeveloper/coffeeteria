import { useEffect, useState } from "react";
import ProductCard from "../Product/ProductCard";

const Menu = () => {
  const [products, setProducts] = useState();

    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[products])

  return (
    <div className="min-h-screen p-16 bg-secondary mb-24">
      <div className="flex flex-col gap-5 items-center tracking-wider mb-10">
        <button className="font-jost text-xs bg-primary text-white px-2 py-1 uppercase font-medium">
          Special Menu
        </button>
        <h2 className="font-bebas text-4xl text-white">Coffee Popular Menu</h2>
      </div>
      <div className="grid grid-cols-3 gap-x-10 gap-y-32">
        {
          products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
        }
      </div>
    </div>
  );
};

export default Menu;
