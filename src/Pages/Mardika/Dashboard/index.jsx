import React from "react";
import Navbar from "@Layouts/Navbar";
import Sidebar from "@Layouts/Sidebar";

const index = () => {
  return (
    <>
      <Navbar className="relative" />
      <div className="flex">
        <Sidebar />
        <section className="container mx-auto px-6 py-16">
          <h1>Mardika Dashboard</h1>
        </section>
      </div>
    </>
  );
};

export default index;
