import React from "react";
import { NavLink } from "react-router-dom";
import navlogo from "../assets/book.ico";

const Navbar = () => {
  const navlink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 text-lg border-[#23BE0A] text-[#23BE0A] font-semibold"
              : "hover:text-[#23BE0A] text-lg transition-all duration-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listed"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 text-lg border-[#23BE0A] text-[#23BE0A] font-semibold"
              : "hover:text-[#23BE0A] text-lg transition-all duration-300"
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pages"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 text-lg border-[#23BE0A] text-[#23BE0A] font-semibold"
              : "hover:text-[#23BE0A] text-lg transition-all duration-300"
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white shadow-md">
      <div className="navbar w-11/12 mx-auto py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            <ul className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow-lg">
              {navlink}
            </ul>
          </div>
          <div  className="flex gap-3 items-center">
            <img  src={navlogo} alt="Logo" className="w-10 h-10" />
            <h2 className="text-3xl font-bold text-gray-800">Book Vibe</h2>
          </div>
        </div> 
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">{navlink}</ul>
        </div>
        <div className="navbar-end flex gap-4">
          <NavLink
            to="/signin"
            className="bg-[#23BE0A] px-5 py-2 rounded-xl text-white font-medium hover:bg-[#1A8C07] transition-all duration-300"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-[#59C6D2] text-white py-2 px-5 rounded-xl font-medium hover:bg-[#40A3B1] transition-all duration-300"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
