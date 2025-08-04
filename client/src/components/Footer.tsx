import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="px-6 pt-12 pb-4 text-white bg-black">
      <div className="grid grid-cols-2 gap-10 mx-auto max-w-7xl md:grid-cols-5 md:gap-1">
        {/* Logo + About */}
        <div className="col-span-2">
          <div className="my-3 kridha-logo">
            <h1
              onClick={() => navigate("/")}
              className="text-3xl font-semibold cursor-pointer select-none md:text-4xl"
            >
              Kridha Store
            </h1>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 md:w-96">
            Welcome to <strong>Kridha Craft Store</strong> – where creativity
            meets tradition. We bring you beautiful, handcrafted products that
            carry love, culture, and charm. Thank you for supporting small
            businesses like ours.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/all-products" className="hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Our Policies</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/our-policies" className="hover:text-white">
                Our Policies
              </a>
            </li>
            <li>
              <a href="/shipping-policy" className="hover:text-white">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="/refund-policy" className="hover:text-white">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Connect */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
          <p className="mb-3 text-sm text-gray-400">
            e-mail us at{" "}
            <a
              href="mailto:kridhacraftstore@gmail.com"
              className="text-blue-600 underline cursor-pointer"
            >
              kridhacraftstore@gmail.com
            </a>
          </p>
          <p className="mb-3 text-sm text-gray-400">
            Follow us on social media and stay updated with latest collections &
            offers.
          </p>
          <div className="flex gap-4 items-center text-white">
            <a
              href="https://www.instagram.com/kridha_store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center px-4 py-2 text-sm text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full transition-colors duration-300 hover:bg-pink-700"
            >
              <FaInstagram className="text-lg" />
              Instagram
            </a>

            <a
              href="https://www.whatsapp.com/channel/0029VahHiR85K3zOR7tnvY2o"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center px-4 py-2 text-sm bg-green-600 rounded-full transition-colors duration-300 hover:bg-green-700"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="pt-3 mt-10 h-7 text-sm text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Kridha Craft Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
