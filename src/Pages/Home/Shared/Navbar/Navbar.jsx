import { Link, NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";
import "./Navbar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="h-24 px-16 flex items-center justify-center md:justify-between border-b border-[#32323D] box-border sticky top-0 z-50 bg-secondary">
      {mobileMenu && (
        <div className="flex flex-col items-center justify-center mobile-menu min-h-screen w-full z-50 absolute top-0 left-0 bg-[#010103]">
          <div className="absolute left-16 top-8">
            <button
              onClick={() => setMobileMenu(false)}
              className="text-white hover:text-primary"
            >
              <RxCross2 className="text-3xl" />
            </button>
          </div>
          <ul className="nav-menu font-jost font-medium text-white uppercase grid place-items-center gap-5 text-[15px]">
            <li>
              <NavLink
              onClick={()=> setMobileMenu(false)}
                className="nav-link hover:text-primary transition"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
              onClick={()=> setMobileMenu(false)}
                className="nav-link hover:text-primary transition"
                to="/menu"
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
              onClick={()=> setMobileMenu(false)}
                className="nav-link hover:text-primary transition"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              {user ? (
                <button
                  onClick={logOut}
                  className="font-jost text-sm tracking-wider py-2 px-5 border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition uppercase"
                >
                  Logout
                </button>
              ) : (
                <Link
                  className="font-jost text-sm tracking-wider py-2 px-5 border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition uppercase"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
      <div className="block md:hidden absolute left-16">
        <button
          onClick={() => setMobileMenu(true)}
          className="text-white hover:text-primary"
        >
          <HiBars3BottomLeft className="text-3xl" />
        </button>
      </div>
      <div>
        <Link to="/">
          <Logo></Logo>
        </Link>
      </div>
      <div className="nav-menu hidden md:block">
        <ul className="flex font-jost font-medium text-white uppercase gap-12 text-[15px]">
          <li>
            <NavLink className="nav-link hover:text-primary transition" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link hover:text-primary transition"
              to="/menu"
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link hover:text-primary transition"
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hidden md:block">
        {user ? (
          <button
            onClick={logOut}
            className="font-jost text-sm tracking-wider py-2 px-5 border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition uppercase"
          >
            Logout
          </button>
        ) : (
          <Link
            className="font-jost text-sm tracking-wider py-2 px-5 border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition uppercase"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
