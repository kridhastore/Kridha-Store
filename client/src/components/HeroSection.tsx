import { useNavigate } from "react-router-dom";
import Banner from "../assets/hero-banner.jpg";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="overflow-hidden relative w-full">
      {/* Background Image */}
      <img
        src={Banner}
        alt="Hero Banner"
        className="object-cover w-full md:h-[32rem] object-center transition-transform duration-700 hover:scale-105"
      />

      {/* Centered Content */}
      <div className="flex absolute inset-0 justify-center items-center px-4">
        <div className="max-w-2xl text-center text-red-500">
          <h1 className="text-3xl font-bold tracking-wider md:text-7xl font-great-vibes">
            Handmade with love
          </h1>

          <button
            onClick={() => navigate("/all-products")}
            className="px-4 py-2 mt-2 font-sans text-xs font-semibold text-white bg-red-600 rounded-full shadow-lg cursor-pointer md:mt-5 md:tracking-widest md:text-sm"
          >
            BEST OFFER OF THE DAY
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
