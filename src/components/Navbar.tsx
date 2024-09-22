import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-lg fixed bg-white z-10 w-full text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <button className="relative w-5 h-5 flex flex-col justify-between items-center group">
            <span
              className={`block w-full h-0.5  bg-_green transform  transition duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-_green transition duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-_green transform transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-[0.62rem]" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Logo */}
        <div className=" text-2xl font-sansJoseph font-bold text-_green">
          Printfull
        </div>

        <div
          className={` font-light leading-6  md:flex md:items-center md:space-x-6 ${
            isOpen
              ? "flex flex-col font-bold  items-start absolute top-16 left-0  overflow-y-hidden  bg-gray-300  w-full p-4 space-y-4"
              : "hidden"
          }`}
        >
          <a href="#" className="hover:text-_green">
            Catalog
          </a>
          <a href="#" className="hover:text-_green">
            How it Works
          </a>
          <a href="#" className="hover:text-_green">
            Pricing
          </a>
          <a href="#" className="hover:text-_green">
            Blog
          </a>
          <a href="#" className="hover:text-_green">
            Services
          </a>
          <a href="#" className="hover:text-_green">
            Use-cases
          </a>
          <a href="#" className="hover:text-_green">
            Need Help?
          </a>
        </div>

        {/* Login/Signup */}
        <div className="flex space-x-4">
          <button className="border border-_gray hover:text-_green  px-5 py-1 rounded">
            Log In
          </button>
          <button className="bg-_green hover:bg-opacity-75 text-white px-5 py-1 rounded ">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
