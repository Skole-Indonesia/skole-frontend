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
              Rekapitulasi Evaluasi Siswa
            </h1>

            <section className="container px-4 mx-auto mt-6">
              <div className="sm:flex sm:items-center sm:justify-between">
                <h2 className="text-lg font-medium text-gray-800">
                  Tabel Rekapitulasi Evaluasi Siswa
                </h2>
                <div className="flex items-center mt-3 gap-x-3">
                  <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg sm:w-auto gap-x-2 hover:bg-blue-600">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3098_154395)">
                        <path
                          d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832"
                          stroke="currentColor"
                          strokeWidth="1.67"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3098_154395">
                          <rect width={20} height={20} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Download dalam bentuk PDF</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                            >
                              Nomor
                            </th>
                            <th
                              scope="col"
                              className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                            >
                              Hari / Tanggal
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                            >
                              Evaluasi Siswa
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray">
                          <tr>
                            <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                              1
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Sabtu, 27 Juli 2023
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Lebih dipertahankan lagi prestasi belajarnya agar
                              dapat menuju kesuksesan dan mudah untuk menggapai
                              cita citanya.
                            </td>
                          </tr>
                          <tr>
                            <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                              2
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Sabtu, 27 Juli 2023
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Lebih dipertahankan lagi prestasi belajarnya agar
                              dapat menuju kesuksesan dan mudah untuk menggapai
                              cita citanya.
                            </td>
                          </tr>
                          <tr>
                            <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                              3
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Sabtu, 27 Juli 2023
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Lebih dipertahankan lagi prestasi belajarnya agar
                              dapat menuju kesuksesan dan mudah untuk menggapai
                              cita citanya.
                            </td>
                          </tr>
                          <tr>
                            <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                              4
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Sabtu, 27 Juli 2023
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Lebih dipertahankan lagi prestasi belajarnya agar
                              dapat menuju kesuksesan dan mudah untuk menggapai
                              cita citanya.
                            </td>
                          </tr>
                          <tr>
                            <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                              5
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Sabtu, 27 Juli 2023
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Lebih dipertahankan lagi prestasi belajarnya agar
                              dapat menuju kesuksesan dan mudah untuk menggapai
                              cita citanya.
                            </td>
                          </tr>
                          <tr>
                            <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                              6
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Sabtu, 27 Juli 2023
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Lebih dipertahankan lagi prestasi belajarnya agar
                              dapat menuju kesuksesan dan mudah untuk menggapai
                              cita citanya.
                            </td>
                          </tr>
                          <tr>
                            <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                              7
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Sabtu, 27 Juli 2023
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Lebih dipertahankan lagi prestasi belajarnya agar
                              dapat menuju kesuksesan dan mudah untuk menggapai
                              cita citanya.
                            </td>
                          </tr>
                          <tr>
                            <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                              8
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Sabtu, 27 Juli 2023
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Lebih dipertahankan lagi prestasi belajarnya agar
                              dapat menuju kesuksesan dan mudah untuk menggapai
                              cita citanya.
                            </td>
                          </tr>
                          <tr>
                            <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                              9
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Sabtu, 27 Juli 2023
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Lebih dipertahankan lagi prestasi belajarnya agar
                              dapat menuju kesuksesan dan mudah untuk menggapai
                              cita citanya.
                            </td>
                          </tr>
                          <tr>
                            <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                              10
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Sabtu, 27 Juli 2023
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              Lebih dipertahankan lagi prestasi belajarnya agar
                              dapat menuju kesuksesan dan mudah untuk menggapai
                              cita citanya.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <a
                  href="#"
                  className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 rtl:-scale-x-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                  </svg>
                  <span>Sebelumnya</span>
                </a>
                <div className="items-center hidden md:flex gap-x-3">
                  <a
                    href="#"
                    className="px-2 py-1 text-sm text-blue-500 rounded-md bg-blue-100/60"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
                  >
                    3
                  </a>
                  <a
                    href="#"
                    className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
                  >
                    ...
                  </a>
                  <a
                    href="#"
                    className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
                  >
                    12
                  </a>
                  <a
                    href="#"
                    className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
                  >
                    13
                  </a>
                  <a
                    href="#"
                    className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
                  >
                    14
                  </a>
                </div>
                <a
                  href="#"
                  className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x"
                >
                  <span>Selanjutnya</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 rtl:-scale-x-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
