import React from "react";
import Navbar from "@Layouts/Navbar";
import Home from "./Home";
import Footer from "@Layouts/Footer";

const index = () => {
  return (
    <>
      <Navbar className="fixed" />
      <Home />
      <Footer />
    </>
  );
};

export default index;
