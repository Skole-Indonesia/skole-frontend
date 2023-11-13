// import React from "react";
// import { Link } from "react-router-dom";

// const MasukMardika = () => {
//   return (
//     <div className="bg-white">
//       <div className="flex justify-center h-screen">
//         {/* Login Form */}
//         <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
//           <div className="flex-1">
//             <div className="text-center">
//               <h1 className="text-blue-600 font-semibold text-3xl">
//                 Masuk ke Skole
//               </h1>
//               <p className="mt-3 text-gray-500">Masuk ke akunmu sekarang!</p>
//             </div>

//             <div className="mt-8">
//               {/* Login Form */}
//               <form>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block mb-2 text-sm text-gray-600"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     placeholder="nama@contoh.com"
//                     className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
//                   />
//                 </div>

//                 <div className="mt-6">
//                   <div className="flex justify-between mb-2">
//                     <label htmlFor="password" className="text-sm text-gray-600">
//                       Password
//                     </label>
//                     <a
//                       href="#"
//                       className="text-sm text-gray-400 hover:text-blue-500 hover:underline"
//                     >
//                       Lupa password?
//                     </a>
//                   </div>
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     placeholder="Password Kamu"
//                     className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
//                   />
//                 </div>

//                 <div className="mt-6">
//                   <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
//                     Masuk
//                   </button>
//                 </div>
//               </form>

//               <p className="mt-6 text-sm text-center text-gray-400">
//                 Belum mempunyai akun ?{" "}
//                 <Link
//                   to="/auth/register/mardika"
//                   className="text-blue-500 focus:outline-none focus:underline hover:underline"
//                 >
//                   Daftar
//                 </Link>
//                 .
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* Background Image */}
//         <div
//           className="hidden bg-cover lg:block lg:w-1/2"
//           style={{
//             backgroundImage:
//               "url(https://plus.unsplash.com/premium_photo-1682088060942-87c4bb446170?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MasukMardika;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MasukMardika = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    if (email === "mardika@gmail.com" && password === "Mardika12345") {
      // Store ROLE in localStorage
      localStorage.setItem("ROLE", "mardika");
      // Redirect to /mardika/dashboard
      // history.push("/mardika/dashboard");
      setTimeout(() => {
        // navigate("/mardika/dashboard");
        window.location.href = "/mardika/cari-kelompok";
      }, 2000);
    } else {
      // Handle invalid login credentials
      alert("Email atau Password salah!");
    }
  };

  return (
    <div className="bg-white">
      <div className="flex justify-center h-screen">
        {/* Login Form */}
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h1 className="text-blue-600 font-semibold text-3xl">
                Masuk ke Skole
              </h1>
              <p className="mt-3 text-gray-500">Masuk ke akunmu sekarang!</p>
            </div>

            <div className="mt-8">
              {/* Login Form */}
              <form onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@contoh.com"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm text-gray-600">
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-blue-500 hover:underline"
                    >
                      Lupa password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password Kamu"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Masuk
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Belum mempunyai akun ?{" "}
                <Link
                  to="/auth/register/mardika"
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Daftar
                </Link>
                .
              </p>
            </div>
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

export default MasukMardika;
