import React from "react";
import Navbar from "@Layouts/Navbar";
import Footer from "@Layouts/Footer";
import "./style.css";
import Icon from "../../Assets/Images/404/icon.png";
import { Link, useNavigate } from "react-router-dom";

const index = () => {
  let navigate = useNavigate();
  return (
    <>
      <Navbar className="fixed" />
      <main>
        <div className="container mx-auto h-screen">
          <span className="bg"></span>
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="flex h-full items-center">
              <img src={Icon} alt="" className="w-100" />
            </div>
            <div className="flex h-full items-center justify-end">
              <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-5xl font-normal text-white text-center">
                  Sorry, we can't find the page <br /> you looking for
                </h1>
                <button
                  onClick={() => navigate(-1)}
                  className="border-2 border-white hover:bg-white hover:text-slate-800 transition-all delay-100 p-4 rounded-full text-white text-lg font-semibold"
                >
                  Kembali ke Halaman Awal
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default index;
