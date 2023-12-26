import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  const navOptions = (
    <div className=" md:flex md:justify-center md:items-center text-black md:text-white">
      <li>
        <NavLink to="/" className="font-primary uppercase text-xl">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contactus" className="font-primary uppercase text-xl">
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="font-primary uppercase text-xl">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu" className="font-primary uppercase text-xl">
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/order" className="font-primary uppercase text-xl">
          Order Food
        </NavLink>
      </li>
    </div>
  );
  return (
    <div className="fixed z-50 w-full bg-[#15151580]">
      <div
        className="navbar  max-w-screen-xl mx-auto text-white 
    "
      >
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className=" text-xl inline-block  font-logo text-left">
            <span className="text-2xl uppercase">Bistro Boss</span> <br />
            <span className="tracking-[6px] text-xl uppercase">
              Res taurant
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
