import { useEffect, useState } from "react";
import { CiShoppingCart, CiUser, CiMenuBurger } from "react-icons/ci";
import { useNavigate, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [renderSidebar, setRenderSidebar] = useState(false);

  useEffect(() => {
    if (showMenu) {
      setRenderSidebar(true);
    } else {
      const timeout = setTimeout(() => {
        setRenderSidebar(false);
      }, 200); // match your animation duration
      return () => clearTimeout(timeout);
    }
  }, [showMenu]);

  const links = [
    { to: "/all-products", label: "All Products" },
    { to: "/collections", label: "Collections" },
    { to: "/track-order", label: "Track Order" },
    { to: "/our-policies", label: "Our Policies" },
    { to: "/about-us", label: "About Us" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  return (
    <>
      <div className="flex sticky top-0 z-50 gap-8 justify-between items-center px-6 py-2 bg-white shadow-sm cursor-pointer md:px-20 min-h-16 md:gap-20">
        {/* Mobile Menu Icon */}
        <CiMenuBurger
          onClick={() => setShowMenu(!showMenu)}
          className={`text-2xl transition-transform duration-300 ease-in-out transform md:hidden ${
            showMenu ? "rotate-90" : ""
          }`}
        />

        {/* Sidebar for mobile */}
        {renderSidebar && (
          <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
        )}

        {/* Logo */}
        <div className="text-center kridha-logo">
          <h1
            onClick={() => navigate("/")}
            className="text-3xl font-semibold cursor-pointer select-none font-great-vibes md:text-4xl"
          >
            Kridha Store
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden gap-5 justify-center items-center md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-1 rounded-md transition-all duration-300 ${
                  isActive
                    ? "bg-gray-200 text-black"
                    : "hover:bg-gray-100 hover:text-black"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Icons */}
        <div className="flex gap-3 justify-center items-center cursor-pointer md:gap-5">
          <CiShoppingCart
            className="text-3xl transition-transform duration-200 hover:scale-110"
            onClick={() => navigate("/cart")}
          />
          <CiUser
            className="text-3xl transition-transform duration-200 hover:scale-110"
            onClick={() => navigate("/profile")}
          />
        </div>
      </div>

      {/* Promo Banner */}
      <div className="px-6 py-0.5 w-full text-center text-white bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 shadow-md">
        <span className="text-sm font-semibold tracking-wide md:text-base">
          🚚 Free Shipping on all orders above ₹1000.
        </span>
      </div>
    </>
  );
};

export default Navbar;
