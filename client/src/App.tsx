import { Routes, Route } from "react-router-dom";

import Signup from "./auth/Signin";
import Signin from "./auth/Signup";
import Logout from "./auth/Logout";
import Profile from "./auth/Profile";

import Home from "./pages/Home";
import Product from "./pages/ProductPage";
import AllProduct from "./pages/AllProduct";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurPolicies from "./pages/OurPolicies";
import TrackOrder from "./pages/TrackOrder";
import ContactInformation from "./pages/ContactInformation";
import Collections from "./pages/CollectionsPage";

import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CollectionProduct from "./pages/CollectionsProduct";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/all-products" element={<AllProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-policies" element={<OurPolicies />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/contact-information" element={<ContactInformation />} />
        <Route path="/collections" element={<Collections />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/product/:slug/:id" element={<ProductPage />} />
        <Route path="/checkout/:checkoutId" element={<CheckoutPage />} />
        <Route path="/collections/:slug/:id" element={<CollectionProduct />} />
      </Routes>

      <div className="h-[1px] w-full bg-gray-500" />

      <Footer />
    </>
  );
}

export default App;
