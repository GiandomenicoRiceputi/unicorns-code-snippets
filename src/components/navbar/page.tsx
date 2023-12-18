"use client";
import React, { useState, useEffect } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NavbarPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="flex items-center justify-between flex-wrap bg-primary-700 p-6">
        <div className="flex items-center flex-shrink-0 text-primary-50 mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Your Name
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-primary-200 border-primary-400 hover:text-primary-50 hover:border-primary-50"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
            </svg>
          </button>
        </div>
        {(isOpen || windowWidth > 1024) && (
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                href="#about"
                className="block mt-4 lg:inline-block lg:mt-0 text-primary-200 hover:text-primary-50 mr-4"
              >
                About
              </a>
              <a
                href="#portfolio"
                className="block mt-4 lg:inline-block lg:mt-0 text-primary-200 hover:text-primary-50 mr-4"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="block mt-4 lg:inline-block lg:mt-0 text-primary-200 hover:text-primary-50"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavbarPage;
