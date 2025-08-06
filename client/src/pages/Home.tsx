import HeroSection from "../components/HeroSection";
import CollectionsSection from "../components/CollectionsSection";
import Bestseller from "../components/BestsellerSection";
import NewArrivals from "../components/NewArrivalsSection";

const Home = () => {
  return (
    <>
      <HeroSection />

      <div className="w-full h-full px-5 md:w-[80%] mx-auto">
        <NewArrivals />

        <CollectionsSection />

        <Bestseller />
      </div>
    </>
  );
};

export default Home;
