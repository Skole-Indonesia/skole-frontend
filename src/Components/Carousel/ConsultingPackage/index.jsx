import React from "react";
import { Link } from "react-router-dom";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const index = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="w-full mx-auto border rounded-lg md:mx-4">
          <div className="p-6">
            <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl">
              Paket Pertama
            </h1>
          </div>

          <hr className="border-gray-200" />

          <div className="p-6">
            <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl">
              Keuntungan:
            </h1>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-700">
                  Bimbingan <span className="text-sm font-bold">(2 kali)</span>
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-700">
                  Konseling<span className="text-sm font-bold">(1 sesi)</span>
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="mx-4 text-gray-700">Pendampingan</span>
              </div>
            </div>
          </div>
          <hr className="border-gray-200" />

          <div className="mb-4 mx-6">
            <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl">
              Rp 60.000 <span className="text-base font-medium">/Sesi</span>
            </h2>
            <Link
              to="/beli-paket/informasi-personal"
              className="w-full block px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Beli Sekarang
            </Link>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-full mx-auto border rounded-lg md:mx-4">
          <div className="p-6">
            <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl">
              Paket Kedua
            </h1>
          </div>

          <hr className="border-gray-200" />

          <div className="p-6">
            <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl">
              Keuntungan:
            </h1>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-700">
                  Bimbingan <span className="text-sm font-bold">(3 kali)</span>
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-700">
                  Konseling<span className="text-sm font-bold">(2 sesi)</span>
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-700">
                  Pendampingan 2 Bulan{" "}
                  <span className="text-xs font-bold">(Free 1 Minggu)</span>
                </span>
              </div>
            </div>
          </div>
          <hr className="border-gray-200" />

          <div className="mb-4 mx-6">
            <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl">
              Rp 75.000 <span className="text-base font-medium">/Sesi</span>
            </h2>
            <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Beli Sekarang
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="max-w-full mx-auto border rounded-lg md:mx-4">
          <div className="p-6">
            <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl">
              Paket Ketiga
            </h1>
          </div>

          <hr className="border-gray-200" />

          <div className="p-6">
            <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl">
              Keuntungan:
            </h1>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-700">
                  Bimbingan <span className="text-sm font-bold">(6 kali)</span>
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-700">
                  Konseling <span className="text-sm font-bold">(4 sesi)</span>
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-700">
                  Pendampingan 4 Bulan{" "}
                  <span className="text-xs font-bold">(Free 2 Minggu)</span>
                </span>
              </div>
            </div>
          </div>
          <hr className="border-gray-200" />

          <div className="mb-4 mx-6">
            <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl">
              Rp 140.000 <span className="text-base font-medium">/Sesi</span>
            </h2>
            <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Beli Sekarang
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="max-w-full mx-auto border rounded-lg md:mx-4">
          <div className="p-6">
            <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl">
              Paket Keempat
            </h1>
          </div>

          <hr className="border-gray-200" />

          <div className="p-6">
            <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl">
              Keuntungan:
            </h1>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-700">
                  Bimbingan <span className="text-sm font-bold">(9 kali)</span>
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-700">
                  Konseling <span className="text-sm font-bold">(6 sesi)</span>
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-700">
                  Pendampingan 6 Bulan{" "}
                  <span className="text-xs font-bold">(Free 3 Minggu)</span>
                </span>
              </div>
            </div>
          </div>
          <hr className="border-gray-200" />

          <div className="mb-4 mx-6">
            <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl">
              Rp 200.000 <span className="text-base font-medium">/Sesi</span>
            </h2>
            <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Beli Sekarang
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default index;
