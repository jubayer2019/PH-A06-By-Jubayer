const NavBar = () => {
  return (
    <div className="shadow-md">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
            <div className="flex items-center gap-1 font-bold text-xl">
            <h2 class="text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h2>
            </div>
        </div>
        <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal gap-10 px-1 text-lg">
            <li>
                <a>Products</a>
            </li>
            <li>
                <a>Features</a>
            </li>
            <li>
                <a>Pricing</a>
            </li>
            <li>
                <a>Testimonials</a>
            </li>
            <li>
                <a>FAQ</a>
            </li>
            </ul>
        </div>
        <div className="navbar-end gap-2">
            <ul className="menu menu-horizontal items-center gap-4 px-1 text-lg">
                <li>
                <i class="fa-solid fa-cart-shopping"></i>
                </li>
                <li>
                <a>Login</a>
                </li>
            </ul>
            <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;