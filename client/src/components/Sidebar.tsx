import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

type SidebarProps = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ showMenu, setShowMenu }: SidebarProps) => {
  const links = [
    { to: "/all-products", label: "All Products" },
    { to: "/collections", label: "Collections" },
    { to: "/track-order", label: "Track Order" },
    { to: "/our-policies", label: "Our Policies" },
    { to: "/about-us", label: "About Us" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  return (
    <div
      className={`fixed bg-white left-0 top-0 w-[75%] h-full transform transition-transform duration-300 ease-in-out z-50 shadow-lg flex flex-col justify-between`}
      style={{ transform: showMenu ? "translateX(0)" : "translateX(-100%)" }}
    >
      <div>
        {/* Header with Close Button */}
        <div className="flex absolute top-1 left-1 justify-between items-center p-4">
          <RxCross1
            className="text-3xl transition-transform duration-300 cursor-pointer hover:rotate-90"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>

        {/* Profile Section */}
        <div className="flex flex-col gap-2 items-center my-6 text-center">
          <img
            src="/default-profile-avatar.jpeg"
            className="w-16 h-16 rounded-full border shadow-sm"
            alt="User"
          />
          <p className="text-lg font-semibold">Welcome, Guest!</p>
          <NavLink
            to="/signin"
            onClick={() => setShowMenu(false)}
            className="text-sm text-gray-500 transition hover:text-black"
          >
            Sign In / Register
          </NavLink>
        </div>

        {/* Links Grid */}
        <div
          onClick={() => setShowMenu(false)}
          className="grid grid-cols-2 gap-4 px-6 mb-8"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `py-3 rounded-lg text-center text-sm font-medium transition-all duration-300 shadow-sm ${
                  isActive
                    ? "bg-gray-200 text-black"
                    : "bg-gray-50 hover:bg-gray-100 hover:text-black"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Sale / Promo Section */}
        <div className="px-6 mb-8">
          <div className="p-4 text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-md">
            <p className="text-lg font-bold">🔥 Summer Sale</p>
            <p className="mt-1 text-sm">Up to 50% OFF on select items</p>
            <NavLink
              to="/collections"
              onClick={() => setShowMenu(false)}
              className="inline-block px-4 py-2 mt-3 text-sm font-semibold text-purple-600 bg-white rounded-full shadow transition hover:bg-gray-100"
            >
              Shop Now
            </NavLink>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-4 pb-6 w-full text-center">
        <h2 className="mb-3 text-base font-semibold text-gray-600">
          Connect With Us
        </h2>
        <div className="flex gap-2 justify-center mb-4">
          <a
            href="https://www.whatsapp.com/channel/0029VahHiR85K3zOR7tnvY2o"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold p-2 rounded-lg shadow-md hover:bg-[#1ebe5d] transition duration-300 w-[8rem] max-w-full"
          >
            <FaWhatsapp className="text-lg" />{" "}
            <span className="text-sm">WhatsApp </span>
          </a>
          <a
            href="https://www.instagram.com/kridha_store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-2 font-semibold text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-md transition duration-300 hover:opacity-90 w-[8rem] max-w-full"
          >
            <FaInstagram className="text-lg" />
            <span className="text-sm">Instagram </span>
          </a>
        </div>
        <p className="text-sm text-gray-500">Made with ❤️ by Kridha Store</p>
      </div>
    </div>
  );
};

export default Sidebar;
