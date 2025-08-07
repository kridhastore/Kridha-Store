import { useNavigate } from "react-router-dom";
import Banner from "../assets/banner.jpg";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="overflow-hidden relative w-full">
      {/* Background Image */}
      <img
        src={Banner}
        alt="Hero Banner"
        className="object-cover h-52 w-full md:h-[32rem] object-left md:object-center transition-transform duration-700 hover:scale-105"
      />

      <div className="absolute inset-0 bg-black opacity-70" />

      {/* Centered Content */}
      <div className="flex absolute inset-0 justify-center items-center px-4">
        <div className="max-w-2xl text-center text-white">
          <h1 className="text-3xl font-bold tracking-wider md:text-7xl font-great-vibes">
            Handmade with love
          </h1>

          <button
            onClick={() => navigate("/all-products")}
            className="px-4 py-2 mt-2 font-sans text-xs font-bold text-red-600 bg-white rounded-lg shadow-lg cursor-pointer md:mt-5 md:tracking-widest md:text-sm"
          >
            BEST OFFER OF THE DAY
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
