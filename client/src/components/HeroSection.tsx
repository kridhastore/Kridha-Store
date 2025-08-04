import { useNavigate } from "react-router-dom";
import Banner from "../assets/banner.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden banner">
      {/* Background Image */}
      <img
        src={Banner}
        alt="Kridha Store Banner"
        className="object-cover w-full h-64 md:h-[32rem] lg:h-[36rem] object-center transition-transform duration-700 hover:scale-105"
      />

      {/* Black tint overlay */}
      <div className="absolute inset-0 bg-black/70 md:bg-black/40" />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:items-end md:px-28">
        <div className="flex flex-col gap-3 md:gap-5 animate-fadeIn">
          <h1 className="text-2xl font-bold text-white md:text-6xl">
            Welcome to
            <br />
            <span className="text-yellow-300">Kridha Craft Store</span>
          </h1>
          <p className="text-sm text-gray-200 md:text-lg">
            Handmade with love ❤️ &amp; crafted for you
          </p>

          {/* Shop Button */}
          <button
            onClick={() => navigate("/all-products")}
            className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 border border-white rounded-full cursor-pointer hover:bg-white hover:text-black md:text-base md:px-6 md:py-3"
          >
            Shop All <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
