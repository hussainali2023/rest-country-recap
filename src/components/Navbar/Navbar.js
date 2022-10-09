import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400 text-xl ml-12"
            : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 text-xl ml-12"
        }
        to={"/home"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400 text-xl ml-12"
            : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 text-xl ml-12"
        }
        to={"/countries"}
      >
        Countries
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400 text-xl ml-12"
            : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 text-xl ml-12"
        }
        to={"/contact"}
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default Navbar;
