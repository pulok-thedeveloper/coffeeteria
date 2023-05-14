import { Link, NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  return (
    <div className="h-24 px-16 flex items-center justify-between border-b border-[#32323D] box-border sticky top-0 z-50 bg-secondary">
      <div>
        <Link to="/">
          <Logo></Logo>
        </Link>
      </div>
      <div className="nav-menu">
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
      <div>
          {
            user ? 
            <button
            onClick={logOut}
            className="font-jost text-sm tracking-wider py-2 px-5 border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition uppercase"
          >
            Logout
          </button>
          :
          <Link
            className="font-jost text-sm tracking-wider py-2 px-5 border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition uppercase"
            to="/login"
          >
            Login
          </Link>
          }
      </div>
    </div>
  );
};

export default Navbar;
