import HeroSection from "../components/HeroSection";
import CollectionsSection from "../components/CollectionsSection";
import Bestseller from "../components/BestsellerSection";
import NewArrivals from "../components/NewArrivalsSection";

const Home = () => {
  return (
    <>
      <HeroSection />

      <div className="w-full h-full md:w-[80%] mx-auto">
        <CollectionsSection />

        <NewArrivals />

        <Bestseller />
      </div>
    </>
  );
};

export default Home;
