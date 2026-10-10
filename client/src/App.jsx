import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import BlogStruct from "./components/BlogComponents/BlogStruct";
import SingleBlog from "./components/BlogComponents/SingleBlog";
import Inventory from "./pages/Inventory";
import SingleCar from "./components/SingleCar";
import SingleBrand from "./components/SingleBrand";
import SingleCategory from "./components/SingleCategory";
import Premium from "./pages/Premium";
import PremiumSingle from "./components/PremiumSingle";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";
import TestDrive from "./pages/Drive";
import OrderPremium from "./pages/OrderPremium";
import CheckoutPremium from "./pages/CheckoutPremium";
import Confirm from "./pages/Confirm";

function ScrollToTopOnMount() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
function App() {
  return (
    <Router>
      <ScrollToTopOnMount />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<BlogStruct />} />
        <Route path="/blog/:blogid" element={<SingleBlog />} />
        <Route path="/cars" element={<Inventory />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/pre/:premiumid" element={<PremiumSingle />} />
        <Route path="/car/:brandName/:carid" element={<SingleCar />} />
        <Route path="/brand/:brandName" element={<SingleBrand />} />
        <Route path="/category/:categoryName" element={<SingleCategory />} />
        <Route path="/order/:carid" element={<Order />} />
        <Route path="/orderPremium/:premiumid" element={<OrderPremium />} />
        <Route path="/drive/:carid" element={<TestDrive />} />
        <Route path="/checkout/:carid" element={<Checkout />} />
        <Route path="/checkoutPremium/:carid" element={<CheckoutPremium />} />
        <Route path="/confirm/:name/:model" element={<Confirm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
