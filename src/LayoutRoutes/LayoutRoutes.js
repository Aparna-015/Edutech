import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Cop/page/Home/Home";
import Header from "../Cop/Header/Header";
import Footer from "../Cop/Footer/Footer";
import Plans from "../Cop/page/Plans/Plans";
import Courses from "../Cop/page/Courses/Courses";
import About from "../Cop/page/AboutUs/AboutUs";
import ContactUs from "../Cop/page/ContactUs/ContactUs";
function LayoutRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Edutech" element={<Home />} />

        <Route path="/services" element={<Plans />} />

        <Route path="/Courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route />
      </Routes>
      <Footer />
    </Router>
  );
}

export default LayoutRoutes;
