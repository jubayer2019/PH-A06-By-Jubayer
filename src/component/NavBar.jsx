import React from 'react';

const NavBar = () => {
  return (
    <div className="shadow-md bg-base-100 top-0 z-50">
      <div className="navbar container mx-auto">
        
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 text-lg">
              <li><a className="hover:text-[#4F39F6] active:bg-transparent">Products</a></li>
              <li><a className="hover:text-[#4F39F6] active:bg-transparent">Features</a></li>
              <li><a className="hover:text-[#4F39F6] active:bg-transparent">Pricing</a></li>
              <li><a className="hover:text-[#4F39F6] active:bg-transparent">Testimonials</a></li>
              <li><a className="hover:text-[#4F39F6] active:bg-transparent">FAQ</a></li>
            </ul>
          </div>
          <div className="flex items-center gap-1 font-bold">
            <h2 className="text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent cursor-pointer">
              DigiTools
            </h2>
          </div>
        </div>

        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1 text-lg font-medium">
            <li>
              <a className="hover:text-[#4F39F6] hover:bg-transparent transition-colors duration-300">Products</a>
            </li>
            <li>
              <a className="hover:text-[#4F39F6] hover:bg-transparent transition-colors duration-300">Features</a>
            </li>
            <li>
              <a className="hover:text-[#4F39F6] hover:bg-transparent transition-colors duration-300">Pricing</a>
            </li>
            <li>
              <a className="hover:text-[#4F39F6] hover:bg-transparent transition-colors duration-300">Testimonials</a>
            </li>
            <li>
              <a className="hover:text-[#4F39F6] hover:bg-transparent transition-colors duration-300">FAQ</a>
            </li>
          </ul>
        </div>

        
        <div className="navbar-end gap-4">
          <div className="hidden sm:flex items-center gap-6 text-lg font-medium">
             <button className="hover:text-[#4F39F6] transition-transform hover:scale-110">
               <i className="fa-solid fa-cart-shopping"></i>
             </button>
             <a className="hover:text-[#4F39F6] transition-colors cursor-pointer">Login</a>
          </div>
          
          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none rounded-full text-white hover:opacity-90 hover:shadow-lg transition-all px-6">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;