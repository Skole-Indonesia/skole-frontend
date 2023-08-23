import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const index = () => {
  const role = localStorage.getItem("ROLE");
  console.log("ini log role nya " + role);
  const location = useLocation();
  const pathname = location.pathname;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavbarItemClick = (content) => {
    // Handle your navigation logic here, if needed
    // For example, you can update the URL using react-router-dom's history.push()
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l">
      {/* ... rest of the code ... */}
      <nav className="flex-1 -mx-3 space-y-3 ">
        <Link
          to={`/${role}/dashboard`}
          className={`flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg w-full ${
            pathname === `/${role}/dashboard`
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "text-neutral__90 hover:text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => handleNavbarItemClick("dashboard")}
        >
          {/* ... icon ... */}
          <span className="mx-2 text-sm font-medium lg:text-base">
            Dashboard
          </span>
        </Link>
        {role === "admin" && (
          <>
            <button
              className="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg w-full active:bg-blue-300 focus:bg-blue-200 hover:text-gray-700 hover:bg-gray-100"
              onClick={toggleDropdown}
            >
              {/* ... icon ... */}
              <span className="mx-2 text-sm font-medium lg:text-base">
                Menu Dewantara Muda
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 ml-auto transition-transform duration-200 transform ${
                  isDropdownOpen ? "rotate-90" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="pl-4">
                <li className="px-3 py-2 hover:bg-gray-100 rounded-lg">
                  <Link
                    to="/tracking-pembelajaran"
                    className={`text-sm font-medium lg:text-base ${
                      pathname === "/tracking-pembelajaran"
                        ? "text-blue-500"
                        : "text-neutral__90 hover:text-gray-700"
                    }`}
                    onClick={() =>
                      handleNavbarItemClick("tracking-pembelajaran")
                    }
                  >
                    Tracking Pembelajaran
                  </Link>
                </li>
                <li className="px-3 py-2 hover:bg-gray-100">
                  <Link
                    to="/buat-akun-siswa"
                    className={`text-sm font-medium lg:text-base ${
                      pathname === "/buat-akun-siswa"
                        ? "text-blue-500"
                        : "text-neutral__90 hover:text-gray-700"
                    }`}
                    onClick={() => handleNavbarItemClick("buat-akun-siswa")}
                  >
                    Buat Akun Siswa
                  </Link>
                </li>
                <li className="px-3 py-2 hover:bg-gray-100">
                  <Link
                    to="/daftar-siswa"
                    className={`text-sm font-medium lg:text-base ${
                      pathname === "/daftar-siswa"
                        ? "text-blue-500"
                        : "text-neutral__90 hover:text-gray-700"
                    }`}
                    onClick={() => handleNavbarItemClick("daftar-siswa")}
                  >
                    Daftar Siswa
                  </Link>
                </li>
              </ul>
            )}
          </>
        )}
        <Link
          to={`/${role}/classroom`}
          className={`flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg w-full ${
            pathname === `/${role}/classroom`
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "text-neutral__90 hover:text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => handleNavbarItemClick("classroom")}
        >
          {/* ... icon ... */}
          <span className="mx-2 text-sm font-medium lg:text-base">
            Classroom
          </span>
        </Link>
        <Link
          to={`/${role}/live-class`}
          className={`flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg w-full ${
            pathname === `/${role}/live-class`
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "text-neutral__90 hover:text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => handleNavbarItemClick("live-class")}
        >
          {/* ... icon ... */}
          <span className="mx-2 text-sm font-medium lg:text-base">
            Live Class
          </span>
        </Link>
        <Link
          to={`/${role}/konseling`}
          className={`flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg w-full ${
            pathname === `/${role}/konseling`
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "text-neutral__90 hover:text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => handleNavbarItemClick("counseling")}
        >
          {/* ... icon ... */}
          <span className="mx-2 text-sm font-medium lg:text-base">
            Konseling
          </span>
        </Link>
        <Link
          to={`/${role}/tracking-pembelajaran`}
          className={`flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg w-full ${
            pathname === `/${role}/tracking-pembelajaran`
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "text-neutral__90 hover:text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => handleNavbarItemClick("tracking-pembelajaran")}
        >
          {/* ... icon ... */}
          <span className="mx-2 text-sm font-medium lg:text-base">
            Tracking Pembelajaran
          </span>
        </Link>
        <Link
          to={`/${role}/pengaturan`}
          className={`flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg w-full ${
            pathname === `/${role}/pengaturan`
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "text-neutral__90 hover:text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => handleNavbarItemClick("pengaturan")}
        >
          {/* ... icon ... */}
          <span className="mx-2 text-sm font-medium lg:text-base">
            Pengaturan
          </span>
        </Link>
        <Link
          to="/logout"
          className={`flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg w-full ${
            pathname === "/counseling"
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "text-neutral__90 hover:text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => handleNavbarItemClick("logout")}
        >
          {/* ... icon ... */}
          <span className="mx-2 text-sm font-medium lg:text-base">Logout</span>
        </Link>
        {/* ... other Link elements for different navbar items ... */}
      </nav>
    </aside>
  );
};

export default index;
