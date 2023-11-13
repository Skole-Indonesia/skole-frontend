import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@Assets/Logo/logoWithBadge.svg";

const Navbar = ({ className }) => {
  const [role, setRole] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isDropdownProfileOpen, setIsDropdownProfileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve role from localStorage
    const storedRole = localStorage.getItem("ROLE");
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  const logOut = () => {
    // Clear localStorage
    localStorage.removeItem("ROLE");
    // Redirect to home page
    navigate("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsDropdownMenuOpen(false);
    setIsDropdownProfileOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = () => {
    if (isMobile) {
      setIsDropdownMenuOpen(!isDropdownMenuOpen);
      setIsDropdownProfileOpen(false); // Close the other dropdown
    }
  };

  const handleMouseEnterMenu = () => {
    if (!isMobile) {
      setIsDropdownMenuOpen(true);
      setIsDropdownProfileOpen(false); // Close the other dropdown
    }
  };

  const handleMouseEnterProfile = () => {
    if (!isMobile) {
      setIsDropdownProfileOpen(true);
      setIsDropdownMenuOpen(false); // Close the other dropdown
    }
  };

  // Fungsi untuk menutup dropdown menu saat salah satu link di dalam menu diklik
  const handleMenuLinkClick = () => {
    if (isMobile) {
      setIsDropdownMenuOpen(false);
    }
  };

  return (
    <nav className={`${className} bg-blue-500 shadow top-0 w-full z-50`}>
      <div className="container px-6 py-2 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                className="w-auto h-10 sm:h-14"
                src={Logo}
                alt="Logo Skole Indonesia"
              />
            </Link>
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:mx-8`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center justify-center lg:mx-8">
              <Link
                to="/"
                className="px-3 py-2 mx-2 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-600 hover:text-white"
              >
                Home
              </Link>
              <div className="relative group">
                {isMobile ? (
                  <button
                    type="button"
                    className="px-3 py-2 mx-2 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-600 hover:text-white flex flex-row items-center gap-2"
                    onClick={handleButtonClick}
                  >
                    Produk
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="px-3 py-2 mx-2 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-600 hover:text-white flex flex-row items-center gap-2"
                    onMouseEnter={handleMouseEnterMenu}
                    onMouseLeave={closeDropdown}
                  >
                    Produk
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                )}
                {isDropdownMenuOpen && (
                  <div
                    className="relative px-4 md:px-0 md:absolute left-3 mt-0 w-48 bg-white rounded-md shadow-none md:shadow-lg"
                    onMouseEnter={handleMouseEnterMenu}
                    onMouseLeave={closeDropdown}
                  >
                    <Link
                      to="/classroom"
                      onClick={handleMenuLinkClick} // Menutup dropdown saat link diklik
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                    >
                      Classroom
                    </Link>
                    <Link
                      to="/konseling"
                      onClick={handleMenuLinkClick} // Menutup dropdown saat link diklik
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                    >
                      Konseling
                    </Link>

                    <Link
                      to="/live-class"
                      onClick={handleMenuLinkClick} // Menutup dropdown saat link diklik
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                    >
                      Live Class
                    </Link>

                    <Link
                      to="/forum-diskusi"
                      onClick={handleMenuLinkClick} // Menutup dropdown saat link diklik
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                    >
                      Forum Diksusi
                    </Link>

                    <Link
                      to="/rank-board"
                      onClick={handleMenuLinkClick} // Menutup dropdown saat link diklik
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                    >
                      Rank Board
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/artikel"
                className="px-3 py-2 mx-2 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-600 hover:text-white"
              >
                Artikel
              </Link>
              <Link
                to="/tentang-kami"
                className="px-3 py-2 mx-2 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-600 hover:text-white"
              >
                Tentang Kami
              </Link>
              <Link
                to="/kontak"
                className="px-3 py-2 mx-2 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-600 hover:text-white"
              >
                Kontak
              </Link>
            </div>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:mx-8`}
          >
            <div className="flex items-center mt-4 lg:mt-0">
              {/* <button
                className="hidden text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-400 focus:text-gray-200 dark:focus:text-gray-400 focus:outline-none"
                aria-label="show notifications"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button> */}

              <div className="relative group">
                {isMobile ? (
                  <button
                    type="button"
                    className="px-3 py-2 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-600 hover:text-white flex flex-row items-center gap-2"
                    onClick={handleButtonClick}
                  >
                    Muhammad Hafidz
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                ) : (
                  <div className="flex">
                    {role === "admin" ||
                    role === "mardika" ||
                    role === "dewantara-muda" ||
                    role === "konselor" ? (
                      <button
                        type="button"
                        className="px-3 py-2 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-600 hover:text-white flex flex-row items-center gap-2"
                        onMouseEnter={handleMouseEnterProfile}
                        onMouseLeave={closeDropdown}
                      >
                        <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                          <img
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                            className="object-cover w-full h-full"
                            alt="avatar"
                          />
                        </div>
                        Muhammad Hafidz
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                          className="w-3 h-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </button>
                    ) : (
                      <div className="flex">
                        <Link
                          to="/auth/register"
                          className="px-3 py-2 mx-2 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
                        >
                          Daftar
                        </Link>
                        <Link
                          to="/auth/masuk"
                          className="px-3 py-2 mx-2 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-600 hover:text-white"
                        >
                          Masuk
                        </Link>
                      </div>
                    )}

                    {isDropdownProfileOpen && (
                      <div
                        className="mt-12 relative px-4 md:px-0 md:absolute left-3 w-48 bg-white rounded-md shadow-none md:shadow-lg"
                        onMouseEnter={handleMouseEnterProfile}
                        onMouseLeave={closeDropdown}
                      >
                        {role === "admin" && (
                          <Link
                            to="/admin/dashboard"
                            onClick={handleMenuLinkClick}
                            className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                          >
                            Dashboard
                          </Link>
                        )}

                        {role === "mardika" && (
                          <>
                            <Link
                              to="/mardika/dashboard"
                              onClick={handleMenuLinkClick}
                              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                              Dashboard
                            </Link>
                            <Link
                              to="/mardika/profile"
                              onClick={handleMenuLinkClick}
                              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                              Profile
                            </Link>
                            <button
                              onClick={logOut}
                              className="w-full text-start block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                              Logout
                            </button>
                          </>
                        )}

                        {role === "dewantara-muda" && (
                          <>
                            <Link
                              to="/dewantara-muda/dashboard"
                              onClick={handleMenuLinkClick}
                              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                              Dashboard
                            </Link>
                            <Link
                              to="/dewantara-muda/profile"
                              onClick={handleMenuLinkClick}
                              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                              Profile
                            </Link>
                            <button
                              onClick={logOut}
                              className="w-full text-start block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                              Logout
                            </button>
                          </>
                        )}

                        {role === "konselor" && (
                          <>
                            <Link
                              to="/konselor/dashboard"
                              onClick={handleMenuLinkClick}
                              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                              Dashboard
                            </Link>
                            <Link
                              to="/konselor/profile"
                              onClick={handleMenuLinkClick}
                              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                              Profile
                            </Link>
                            <button
                              onClick={logOut}
                              className="w-full text-start block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                              Logout
                            </button>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
