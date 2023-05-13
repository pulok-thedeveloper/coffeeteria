import { useEffect, useState } from "react";
import Logo from "../../Logo/Logo";

const Footer = () => {
  const [menu, setMenu] = useState();

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, [menu]);

  return (
    <div className="grid grid-cols-4 gap-10 p-16 border-t border-[#32323D] box-border">
      <div>
        <Logo></Logo>
        <p className="text-sm mt-5 font-jost">
          Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam
          quis quam venenatis fringilla. Morbi vestibulum
        </p>
        <div className="flex gap-5 mt-5 font-jost font-semibold">
          <button className="text-xs border border-primary py-1 hover:bg-primary hover:text-white transition flex items-center gap-2 px-3 uppercase text-primary">
            Facebook
          </button>
          <button className="text-xs border border-primary py-1 hover:bg-primary hover:text-white transition flex items-center gap-2 px-3 uppercase text-primary">
            Twitter
          </button>
          <button className="text-xs border border-primary py-1 hover:bg-primary hover:text-white transition flex items-center gap-2 px-3 uppercase text-primary">
            Youtube
          </button>
        </div>
      </div>
      <div className="col-span-2 justify-self-center">
        <h3 className="font-jost mb-8 uppercase text-primary font-semibold underline underline-offset-8">
          Coffeteria Menu
        </h3>
        <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
          {menu?.map((item) => (
            <li className="font-jost text-xs uppercase" key={item._id}>
              {item._id}. {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Footer;
