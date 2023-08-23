import React, { useState } from "react";
import Navbar from "@Layouts/Navbar";
import Button from "@Components/Button";
import Footer from "@Layouts/Footer";

const index = () => {
  const [inviteCode, setInviteCode] = useState("");
  const [headingPopupMessage, setHeadingPopupMessage] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [inputError, setInputError] = useState(false);

  const handleInviteCodeChange = (e) => {
    setInviteCode(e.target.value);
  };

  const handleCheckInviteCode = () => {
    if (inviteCode === "") {
      setInputError(true);
    } else {
      // Simulate checking the invite code
      if (inviteCode === "benar") {
        setHeadingPopupMessage("Kamu Berhasil Masuk Kelompok!");
        setPopupMessage(
          "Kamu telah berhasil masuk ke kelompok nama kelompok. Silahkan mengakses halaman kelompok dengan klik tombol “Halaman Kelompok”."
        );
        setIsOpen(false);
      } else {
        setHeadingPopupMessage("Kode Invite Salah!");
        setPopupMessage(
          "Kamu salah memasukkan kode invite! Silahkan hubungi kembali kepada Dewantara Muda-mu untuk mendapatkan kode invite kelompok."
        );
        setIsOpen(false);
      }
      setIsPopupOpen(true);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setInputError(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModalRequest, setIsOpenModalRequest] = useState(false);
  const [modalRequest, setIsModalRequest] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModalRequest = () => {
    setIsOpenModalRequest(true);
  };

  const closeModalRequest = () => {
    setIsOpenModalRequest(false);
  };

  const afterRequest = () => {
    setIsOpenModalRequest(false);
    setIsModalRequest(true);
  };

  const closeRequest = () => {
    setIsModalRequest(false);
  };

  return (
    <>
      <Navbar className="relative" />
      <main>
        <section className="container mx-auto px-6 py-16">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-5xl">
            Temukan Kelompokmu
          </h1>
          <p className="mt-3 text-gray-600 text-sm lg:text-lg">
            Ayo bergabung dengan teman-teman Mardika yang lain dan belajar seru
            bareng. Ada Dewantara Muda yang siap membantu dan membimbing kamu.
          </p>
        </section>

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
                          className="px-12 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-800"
                        >
                          No.
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-800"
                        >
                          Nama Kelompok
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-800"
                        >
                          Dewantar Muda
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-800"
                        >
                          Jumlah Mardika
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-800"
                        >
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray">
                      <tr>
                        <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                          1
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                              <img
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                className="object-cover w-full h-full"
                                alt="avatar"
                              />
                            </div>
                            Melati
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          Yuni S.Pd
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          7/10
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <div className="flex flex-col gap-2">
                            <div>
                              <button
                                className="px-5 py-2 text-base font-semibold text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 xl:w-10/12 w-auto"
                                onClick={openModal}
                              >
                                <span>Masukkan Kode Invite</span>
                              </button>
                            </div>
                            <button
                              className="px-5 py-2 text-base font-semibold text-gray-800 transition-colors duration-200 bg-white border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white xl:w-10/12 w-auto"
                              onClick={openModalRequest}
                            >
                              <span>Request Gabung</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                          2
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                              <img
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                className="object-cover w-full h-full"
                                alt="avatar"
                              />
                            </div>
                            Melati
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          Yuni S.Pd
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          7/10
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <div className="flex flex-col gap-2">
                            <div>
                              <button
                                className="px-5 py-2 text-base font-semibold text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 xl:w-10/12 w-auto"
                                onClick={openModal}
                              >
                                <span>Masukkan Kode Invite</span>
                              </button>
                            </div>
                            <button
                              className="px-5 py-2 text-base font-semibold text-gray-800 transition-colors duration-200 bg-white border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white xl:w-10/12 w-auto"
                              onClick={openModalRequest}
                            >
                              <span>Request Gabung</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                          3
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                              <img
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                className="object-cover w-full h-full"
                                alt="avatar"
                              />
                            </div>
                            Melati
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          Yuni S.Pd
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          7/10
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <div className="flex flex-col gap-2">
                            <div>
                              <button
                                className="px-5 py-2 text-base font-semibold text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 xl:w-10/12 w-auto"
                                onClick={openModal}
                              >
                                <span>Masukkan Kode Invite</span>
                              </button>
                            </div>
                            <button
                              className="px-5 py-2 text-base font-semibold text-gray-800 transition-colors duration-200 bg-white border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white xl:w-10/12 w-auto"
                              onClick={openModalRequest}
                            >
                              <span>Request Gabung</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                          4
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                              <img
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                className="object-cover w-full h-full"
                                alt="avatar"
                              />
                            </div>
                            Melati
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          Yuni S.Pd
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          7/10
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <div className="flex flex-col gap-2">
                            <div>
                              <button
                                className="px-5 py-2 text-base font-semibold text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 xl:w-10/12 w-auto"
                                onClick={openModal}
                              >
                                <span>Masukkan Kode Invite</span>
                              </button>
                            </div>
                            <button
                              className="px-5 py-2 text-base font-semibold text-gray-800 transition-colors duration-200 bg-white border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white xl:w-10/12 w-auto"
                              onClick={openModalRequest}
                            >
                              <span>Request Gabung</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                          5
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                              <img
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                className="object-cover w-full h-full"
                                alt="avatar"
                              />
                            </div>
                            Melati
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          Yuni S.Pd
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          7/10
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <div className="flex flex-col gap-2">
                            <div>
                              <button
                                className="px-5 py-2 text-base font-semibold text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 xl:w-10/12 w-auto"
                                onClick={openModal}
                              >
                                <span>Masukkan Kode Invite</span>
                              </button>
                            </div>
                            <button
                              className="px-5 py-2 text-base font-semibold text-gray-800 transition-colors duration-200 bg-white border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white xl:w-10/12 w-auto"
                              onClick={openModalRequest}
                            >
                              <span>Request Gabung</span>
                            </button>
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between my-6">
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
      </main>
      <Footer />
      {isOpen && (
        <>
          <div className="fixed bg-black bg-opacity-75 top-0 left-0 w-full h-screen">
            <div className="container mx-auto flex justify-center items-center h-full">
              <div className="card bg-white rounded-md w-full lg:w-1/2">
                <div className="p-6 flex flex-col space-y-4">
                  <h3 className="text-lg font-bold leading-6 text-gray-800 capitalize">
                    Bergabung dengan Mardika lainnya
                  </h3>
                  <p className="mt-3 text-gray-600 text-base inline">
                    Apakah kamu sudah menerima kode invite dari Dewantara
                    Muda-mu? Jika ya, kamu hanya perlu masukkan kode tersebut ke
                    dalam kotak di bawah ini.
                  </p>
                  <table className="min-w-full divide-y rounded-md">
                    <tr>
                      <td
                        scope="col"
                        className="p-4 text-sm font-bold text-gray-800 bg-gray-100 whitespace-nowrap w-1/3"
                      >
                        Nama Kelompok
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                            <img
                              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                              className="object-cover w-full h-full"
                              alt="avatar"
                            />
                          </div>
                          Melati
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        className="p-4 text-sm font-bold text-gray-800 bg-gray-100 whitespace-nowrap w-1/3"
                      >
                        Dewantara Muda
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                        Yuni S.Pd
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        className="p-4 text-sm font-bold text-gray-800 bg-gray-100 whitespace-nowrap w-1/3"
                      >
                        Jumlah Mardika
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                        7/10
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        className="p-4 text-sm font-bold text-gray-800 bg-gray-100 whitespace-nowrap w-1/3"
                      >
                        Kode Invite
                      </td>
                      <td className="p-4 text-base font-normal text-gray-700 whitespace-nowrap">
                        <input
                          type="text"
                          value={inviteCode}
                          onChange={handleInviteCodeChange}
                          className={
                            inputError
                              ? "border-red-500 border w-full p-2 rounded-md bg-red-50"
                              : "border w-full p-2 rounded-md"
                          }
                          placeholder="Enter invite code"
                        />
                      </td>
                    </tr>
                  </table>
                  <p className="mt-3 text-gray-600 text-base inline">
                    Kamu sudah dipastikan masuk ke dalam kelompok yang kamu
                    pilih jika mempunyai kode invite kelompok tersebut. Pastikan
                    untuk klik tombol "<b>Masukkan Kode Invite</b>" untuk segera
                    bergabung dengan teman-temanmu yang lain. Selamat bergabung,
                    Mardika!
                  </p>
                </div>
                <div className="bg-gray-100 p-6 flex justify-end gap-4">
                  <button
                    className="px-5 py-2 text-base font-normal text-gray-800 transition-colors duration-200 bg-white border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white w-auto"
                    onClick={closeModal}
                  >
                    <span>Kembali</span>
                  </button>
                  <button
                    className="px-5 py-2 text-base font-normal text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 w-auto"
                    onClick={handleCheckInviteCode}
                  >
                    <span>Masukkan Kode Invite</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center w-full lg:w-1/2 space-y-4">
            <h1
              className={
                inviteCode === "benar"
                  ? "text-green-600 text-xl font-bold leading-6 capitalize"
                  : "text-red-600 text-xl font-bold leading-6 capitalize"
              }
            >
              {headingPopupMessage}
            </h1>
            <p>{popupMessage}</p>
            <button
              className="px-5 py-2 text-base font-normal text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 w-auto"
              onClick={closePopup}
            >
              <span>Kembali</span>
            </button>
          </div>
        </div>
      )}
      {isOpenModalRequest && (
        <>
          <div className="fixed bg-black bg-opacity-75 top-0 left-0 w-full h-screen">
            <div className="container mx-auto flex justify-center items-center h-full">
              <div className="card bg-white rounded-md w-full lg:w-1/2">
                <div className="p-6 flex flex-col space-y-4">
                  <h3 className="text-lg font-bold leading-6 text-gray-800 capitalize">
                    Permohonan Bergabung
                  </h3>
                  <p className="mt-3 text-gray-600 text-base inline">
                    Kamu akan mengirimkan permohonan untuk bergabung ke kelompok
                    dengan data sebagai berikut:
                  </p>
                  <table className="min-w-full divide-y rounded-md">
                    <tr>
                      <td
                        scope="col"
                        className="p-4 text-sm font-bold text-gray-800 bg-gray-100 whitespace-nowrap w-1/3"
                      >
                        Nama Kelompok
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                            <img
                              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                              className="object-cover w-full h-full"
                              alt="avatar"
                            />
                          </div>
                          Melati
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        className="p-4 text-sm font-bold text-gray-800 bg-gray-100 whitespace-nowrap w-1/3"
                      >
                        Dewantara Muda
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                        Yuni S.Pd
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        className="p-4 text-sm font-bold text-gray-800 bg-gray-100 whitespace-nowrap w-1/3"
                      >
                        Jumlah Mardika
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                        7/10
                      </td>
                    </tr>
                  </table>
                  <p className="mt-3 text-gray-600 text-base inline">
                    Sesaat setelah kamu mengirim permohonan, Dewantara Muda
                    selaku pemilik kelompok akan melihat permohonanmu dan segera
                    menerima jika ia membolehkanmu untuk bergabung.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 flex justify-end gap-4">
                  <button
                    className="px-5 py-2 text-base font-normal text-gray-800 transition-colors duration-200 bg-white border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white w-auto"
                    onClick={closeModalRequest}
                  >
                    <span>Kembali</span>
                  </button>
                  <button
                    className="px-5 py-2 text-base font-normal text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 w-auto"
                    onClick={afterRequest}
                  >
                    <span>Kirim Permohonan</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {modalRequest && (
        <>
          <div className="fixed bg-black bg-opacity-75 top-0 left-0 w-full h-screen">
            <div className="container mx-auto flex justify-center items-center h-full">
              <div className="card bg-white rounded-md w-full lg:w-1/2">
                <div className="p-6 flex flex-col space-y-4">
                  <h3 className="text-lg font-bold leading-6 text-gray-800 capitalize">
                    Permohonan Bergabungmu Sudah Terkirim!
                  </h3>
                  <p className="mt-3 text-gray-600 text-base inline">
                    Saat ini permohonanmu untuk bergabung sudah terkirim kepada
                    pemilik kelompok. Silahkan tunggu beberapa saat. Namun,
                    apabila kamu ditolak, jangan berkecil hati. Kamu bisa
                    memilih kelompok lain. Semoga beruntung!
                  </p>
                </div>
                <div className="bg-gray-100 p-4 flex justify-center">
                  <button
                    className="px-5 py-2 text-base font-normal text-gray-800 transition-colors duration-200 bg-white border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white w-auto"
                    onClick={closeRequest}
                  >
                    <span>Kembali</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default index;

// import React, { useState } from "react";

// const Index = () => {
//   const [inviteCode, setInviteCode] = useState("");
//   const [popupMessage, setPopupMessage] = useState("");
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [inputError, setInputError] = useState(false);

//   const handleInviteCodeChange = (e) => {
//     setInviteCode(e.target.value);
//   };

//   const handleCheckInviteCode = () => {
//     if (inviteCode === "") {
//       setInputError(true);
//     } else {
//       // Simulate checking the invite code
//       if (inviteCode === "correct") {
//         setPopupMessage("Invite code is correct! You're in.");
//       } else {
//         setPopupMessage("Invalid invite code. Please try again.");
//       }
//       setIsPopupOpen(true);
//     }
//   };

//   const closePopup = () => {
//     setIsPopupOpen(false);
//     setInputError(false);
//   };

//   return (
//     <div>
// <input
//   type="text"
//   value={inviteCode}
//   onChange={handleInviteCodeChange}
//   className={inputError ? "border-red-500 border" : "border"}
//   placeholder="Enter invite code"
// />
//       <button onClick={handleCheckInviteCode}>Check Invite Code</button>

// {isPopupOpen && (
//   <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
//     <div className="bg-white p-6 rounded-lg">
//       <p>{popupMessage}</p>
//       <button onClick={closePopup}>Close</button>
//     </div>
//   </div>
// )}
//     </div>
//   );
// };

// export default Index;
