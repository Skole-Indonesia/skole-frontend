import React from "react";
import { Link } from "react-router-dom";

const RegisterKonselor = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-center h-screen">
        {/* Login Form */}
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h1 className="text-blue-600 font-semibold text-3xl">
                Daftar ke Skole
              </h1>
              <p className="mt-3 text-gray-500">Buat akunmu sekarang juga!</p>
            </div>

            <div className="mt-8">
              <form>
                <div>
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Nama Lengkap"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="emailRegister"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="emailRegister"
                    id="emailRegister"
                    placeholder="nama@contoh.com"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="passwordRegister"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="passwordRegister"
                    id="passwordRegister"
                    placeholder="Password Kamu"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Konfirmasi Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Register
                  </button>
                </div>
              </form>
            </div>

            <p className="mt-6 text-sm text-center text-gray-400">
              Sudah mempunyai akun ?{" "}
              <Link
                to="/auth/masuk/mardika"
                className="text-blue-500 focus:outline-none focus:underline hover:underline"
              >
                Masuk
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Background Image */}
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1682088060942-87c4bb446170?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterKonselor;
