import { useEffect, useState } from "react";
import Logo from "../../Logo/Logo";
import { SlLocationPin } from "react-icons/sl";
import { MdPhoneIphone } from "react-icons/md";

const Footer = () => {
  const [menu, setMenu] = useState();

  useEffect(() => {
    fetch("https://coffeeteria-server.vercel.app/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data.data));
  }, [menu]);

  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-10 p-16 border-t border-[#32323D] box-border">
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
        <div className="col-span-2 lg:justify-self-center">
          <h3 className="font-jost mb-8 uppercase text-primary font-semibold underline underline-offset-8">
            Coffeteria Menu
          </h3>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
            {menu?.map((item) => (
              <li className="font-jost text-xs uppercase" key={item._id}>
                {item.id}. {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="font-jost flex flex-col gap-5 items-center justify-center">
          <p className="flex gap-3 items-center text-sm text-white">
            <SlLocationPin className="text-2xl text-primary" /> ADDRESS : 30
            North West New
          </p>
          <p className="flex gap-3 items-center text-sm text-white">
            <MdPhoneIphone className="text-2xl text-primary" />
            PHONE : +88019 339 702 520
          </p>
          <div className="flex">
            <input
              className="bg-[#010103] border px-5 py-2 text-sm focus:bg-[#ffffff3a] outline-none border-primary"
              type="email"
              placeholder="Enter email address"
            />
            <input
              className="text-sm px-3 py-2 cursor-pointer border border-primary bg-primary uppercase text-black"
              type="submit"
              value="Send"
            />
          </div>
        </div>
      </div>
      <p className="font-jost bg-primary text-center py-3 text-white">© 2023 Coffeteria, All Rights Reserved</p>
    </div>
  );
};

export default Footer;
