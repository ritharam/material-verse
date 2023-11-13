import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="bg-blue-500 p-2">
      <div className="max-w-screen-xl flex flex-col md:flex-row flex-wrap items-center justify-between mx-auto p-2">
        <div className="flex justify-between w-full md:w-1/4">
          <div>
            <img
              src="https://picsum.photos/400/300"
              className="h-[50px] md:h-[70px] mr-3"
              alt="Logo"
            />
          </div>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <div className="flex flex-col gap-1">
                <div className="text-black font-bold">&times;</div>
              </div>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={
            "lg:flex flex-grow md:flex-none items-center flex md:h-auto overflow-hidden" +
            (navbarOpen ? " h-auto" : " h-0")
          }
          id="navbar-default"
        >
          <ul className="font-medium justify-center  flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-10 md:mt-0 md:border-0 ">
            <li className="md:pt-2">
              <Link
                to={"/"}
                className="font-normal leading-[35.6px] text-[20px] font-['Poppins-Regular']"
                aria-current="page"
              >
                Material 
              </Link>
            </li>
            <li className="md:pt-2">
              <Link
                to={"/Utilities"}
                className="font-normal leading-[35.6px] text-[20px] font-['Poppins-Regular']"
                aria-current="page"
              >
                Utilities
              </Link>
            </li>
            <li className="md:pt-2">
              <a
                href="#about"
                className="font-normal leading-[35.6px] text-[20px] font-['Poppins-Regular']"
                aria-current="page"
              >
                Useful Links
              </a>
            </li>
            <li className="md:pt-2">
              <Link
                to="/events"
                className="font-normal leading-[35.6px] text-[20px] font-['Poppins-Regular']"
                aria-current="page"
              >
                Archives
              </Link>
            </li>
            <li className="md:pt-2">
              <a
                href="#sponsors"
                className="font-normal leading-[35.6px] text-[20px] font-['Poppins-Regular']"
                aria-current="page"
              >
                Contribute
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
