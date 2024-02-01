import React from "react";
import { useState } from "react";

const NavBar = () => {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };
  return (
    // <div classNameName="m-0 p-0">
    //   <div classNameName="flex space-x-12 bg-black text-white h-16 p-4">
    //     <div classNameName="ml-24">HOME</div>
    //     <div>ABOUT</div>
    //     <div>PORTFOLIO</div>
    //     <div>CONTACT</div>
    //   </div>
    // </div>
    <div>
      <nav className="bg-black text-white fixed z-10 w-full top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center md:justify-start justify-between mx-auto p-4 ">
          <a
            href="https://flowbite.com/"
            className="invisible flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <button
            onClick={toggleCollapse}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={!isCollapsed}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:w-auto md:block ${
              isCollapsed ? "hidden" : "block"
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:flex md:space-x-8  md:mt-0 text-white">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white ">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white ">
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white ">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
