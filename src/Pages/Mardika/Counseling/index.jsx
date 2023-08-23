import React from "react";
import Navbar from "@Layouts/Navbar";
import Sidebar from "@Layouts/Sidebar";
import Button from "@Components/Button";

const index = () => {
  return (
    <>
      <Navbar className="relative" />
      <div className="flex">
        <Sidebar />
        <section className="h-[90vh] overflow-auto w-full">
          <div className="container mx-auto px-6 py-16 ">
            <h1 className="text-2xl font-semibold text-gray-800 lg:text-5xl">
              Live Class
            </h1>

            <div className="flex mt-6 gap-2">
              <Button className="bg-blue-500 text-white" text="Semua" />
              <Button
                className="bg-gray-100 border-slate-400 border text-slate-600"
                text="Akan Datang"
              />
              <Button
                className="bg-gray-100 border-slate-400 border text-slate-600"
                text="Telah Selesai"
              />
            </div>

            <div className="mt-6">
              <h1 className="text-xl font-semibold text-gray-800 lg:text-3xl">
                Sedang dipelajari
              </h1>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3">
                <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-bold text-gray-800 uppercase">
                      NIKE AIR
                    </h1>
                    <p className="mt-1 text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi quos quidem sequi illum facere recusandae
                      voluptatibus
                    </p>
                  </div>
                  <img
                    className="object-cover w-full h-48 mt-2"
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                    alt="NIKE AIR"
                  />
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <h1 className="text-lg font-bold text-white">$129</h1>
                    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                      Add to cart
                    </button>
                  </div>
                </div>

                <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-bold text-gray-800 uppercase">
                      NIKE AIR
                    </h1>
                    <p className="mt-1 text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi quos quidem sequi illum facere recusandae
                      voluptatibus
                    </p>
                  </div>
                  <img
                    className="object-cover w-full h-48 mt-2"
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                    alt="NIKE AIR"
                  />
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <h1 className="text-lg font-bold text-white">$129</h1>
                    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                      Add to cart
                    </button>
                  </div>
                </div>

                <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-bold text-gray-800 uppercase">
                      NIKE AIR
                    </h1>
                    <p className="mt-1 text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi quos quidem sequi illum facere recusandae
                      voluptatibus
                    </p>
                  </div>
                  <img
                    className="object-cover w-full h-48 mt-2"
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                    alt="NIKE AIR"
                  />
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <h1 className="text-lg font-bold text-white">$129</h1>
                    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <h1 className="mt-6 text-xl font-semibold text-gray-800 lg:text-3xl">
                Selesai dipelajari
              </h1>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3">
                <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-bold text-gray-800 uppercase">
                      NIKE AIR
                    </h1>
                    <p className="mt-1 text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi quos quidem sequi illum facere recusandae
                      voluptatibus
                    </p>
                  </div>
                  <img
                    className="object-cover w-full h-48 mt-2"
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                    alt="NIKE AIR"
                  />
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <h1 className="text-lg font-bold text-white">$129</h1>
                    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
