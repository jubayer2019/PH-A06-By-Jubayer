const NavBar = ({ cartCount }) => {
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
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent cursor-pointer">
            DigiTools
          </h2>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1 text-lg font-medium text-slate-600">
            <li><a className="hover:text-[#4F39F6] transition-colors">Products</a></li>
            <li><a className="hover:text-[#4F39F6] transition-colors">Features</a></li>
            <li><a className="hover:text-[#4F39F6] transition-colors">Pricing</a></li>
            <li><a className="hover:text-[#4F39F6] transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-4">
          <div className="flex items-center gap-6">
            <div className="indicator cursor-pointer hover:scale-110 transition-transform">
              {cartCount > 0 && (
                <span className="indicator-item badge badge-sm bg-[#9514FA] border-none text-white font-bold">
                  {cartCount}
                </span>
              )}
              <button className="text-xl text-slate-700 hover:text-[#4F39F6]">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
            <a className="hidden sm:block hover:text-[#4F39F6] font-medium transition-colors cursor-pointer">Login</a>
            <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none rounded-full text-white px-6">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;