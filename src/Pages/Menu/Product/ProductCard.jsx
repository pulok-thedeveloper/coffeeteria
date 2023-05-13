// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  // eslint-disable-next-line no-undef, react/prop-types
  const { title, image, price, specialPrice } = product;
  return (
    <div className="rounded-xl relative text-secondary">
      <div className="w-full">
        <img className="w-full rounded-xl object-contain" src={image} alt="" />
      </div>
      <div className="absolute rounded-lg bg-white w-[80%] h-auto left-1/2 -translate-x-1/2 top-full -translate-y-1/2 p-5 text-center">
        <h2 className="font-bebas text-3xl mb-1">{title}</h2>
        <p className="uppercase font-jost text-sm">
          <span className="font-medium">Price - </span>
          <span className="text-primary">${specialPrice} / </span>
          <span className="line-through text-gray-400">${price}</span>
        </p>
        <button className="mt-3 uppercase border border-primary text-xs py-2 px-3 rounded font-semibold bg-primary hover:bg-secondary text-secondary hover:text-primary transition">
          Order now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
