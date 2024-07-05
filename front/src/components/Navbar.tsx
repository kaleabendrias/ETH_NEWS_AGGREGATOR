import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Using FontAwesome icons from react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold">ETH News Aggregator</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto mt-2 md:mt-0`}
        >
          <NavLink
            exact
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block bg-gray-800 px-3 py-2 rounded md:mx-2"
                : "block hover:bg-gray-700 px-3 py-2 rounded md:mx-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/business"
            className={({ isActive }) =>
              isActive
                ? "block bg-gray-800 px-3 py-2 rounded md:mx-2"
                : "block hover:bg-gray-700 px-3 py-2 rounded md:mx-2"
            }
          >
            Business
          </NavLink>
          <NavLink
            to="/sports"
            className={({ isActive }) =>
              isActive
                ? "block bg-gray-800 px-3 py-2 rounded md:mx-2"
                : "block hover:bg-gray-700 px-3 py-2 rounded md:mx-2"
            }
          >
            Sports
          </NavLink>
          <NavLink
            to="/technology"
            className={({ isActive }) =>
              isActive
                ? "block bg-gray-800 px-3 py-2 rounded md:mx-2"
                : "block hover:bg-gray-700 px-3 py-2 rounded md:mx-2"
            }
          >
            Technology
          </NavLink>
          <NavLink
            to="/health"
            className={({ isActive }) =>
              isActive
                ? "block bg-gray-800 px-3 py-2 rounded md:mx-2"
                : "block hover:bg-gray-700 px-3 py-2 rounded md:mx-2"
            }
          >
            Health
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
