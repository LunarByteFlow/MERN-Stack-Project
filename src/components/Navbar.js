import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  React.useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <div>
      <nav className="bg-purple-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="#" className="text-3xl font-extrabold">
            Note Wizard
          </Link>
          <div className="space-x-4">
            <Link
              to="/login"
              className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/createaccount"
              className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
