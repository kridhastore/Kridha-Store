import HeroSection from "../components/HeroSection";
import collectionsfrom "../components/Collections";
import Bestseller from "../components/Bestseller";
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  return (
    <>
      <HeroSection />

      <div className="w-full h-full px-5 md:w-[80%] mx-auto">
        <NewArrivals />

        <collections/>

        <Bestseller />
      </div>
    </>
  );
};

export default Home;
