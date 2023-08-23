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
    setIsOpen(false);
    setIsModalRequest(true);
  };

  const closeRequest = () => {
    setIsModalRequest(false);
  };

  const [message, setMessage] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  const [isGenerated, setIsGenerated] = useState(false);

  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const generateCode = () => {
    // Logic to generate invite code goes here
    // For now, let's set a sample code
    setInviteCode("ABC123");
    setIsGenerated(true);
  };

  const copyCode = () => {
    // Logic to copy invite code to clipboard goes here
  };

  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const codeToCopy = "ABC123";
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
  };

  const [image, setImage] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleImage(file);
  };

  const handleImageInput = (event) => {
    const file = event.target.files[0];
    handleImage(file);
  };

  const handleImage = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar className="relative" />
      <main>
        <section className="container mx-auto px-6 py-16">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 lg:text-5xl">
              Buat Kelompokmu
            </h1>
            <p className="mt-3 text-gray-600 text-sm lg:text-lg">
              Kamu belum membuat kelompok. Buat kelompok terlebih dahulu agar
              Mardika dan kamu bisa melakukan kegiatan belajar mengajar bersama.
            </p>
            <button
              className="mt-3 px-5 py-2 text-base font-semibold text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
              onClick={openModal}
            >
              <span>Buat Kelompok</span>
            </button>
            <h1 className="mt-6 text-2xl font-semibold text-gray-800 lg:text-5xl">
              Daftar Kelompok
            </h1>
            <p className="mt-3 text-gray-600 text-sm lg:text-lg">
              Daftar kelompok yang sudah dibuat oleh teman-teman Dewantara Muda.
            </p>
          </div>
        </section>

        <section className="container px-4 mx-auto">
          <div className="flex flex-col">
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
            <div className="container-fluid px-6 mx-auto flex justify-center items-center h-full">
              <div className="card bg-white rounded-md w-full lg:w-1/2 overflow-auto min-h-min max-h-full">
                <div className="p-6 flex flex-col space-y-4">
                  <h3 className="text-lg font-bold leading-6 text-gray-800 capitalize">
                    Buat Kelompok
                  </h3>
                  <p className="mt-3 text-gray-600 text-base inline">
                    Kelompok adalah wadah bagi Dewantara Muda dan Mardika untuk
                    berbagi bahan ajar dan informasi serta belajar bersama.
                    Dengan mengisi data di bawah ini kamu akan membuat
                    kelompokmu sendiri.
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
                        <input
                          type="text"
                          value={""}
                          onChange={""}
                          className={
                            inputError
                              ? "border-red-500 border w-full p-2 rounded-md bg-red-50"
                              : "border w-full p-2 rounded-md"
                          }
                          placeholder="Masukkan nama kelompok"
                        />
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
                        <textarea
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                          rows="6"
                          placeholder="Buat deskripsi kelompok ..."
                          value={message}
                          onChange={handleTextareaChange}
                        ></textarea>
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
                        <select
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                          value={selectedOption}
                          onChange={handleSelectChange}
                        >
                          <option value="">Select an option</option>
                          <option value="option1">5 Orang</option>
                          <option value="option2">6 Orang</option>
                          <option value="option3">7 Orang</option>
                          <option value="option4">8 Orang</option>
                          <option value="option5">9 Orang</option>
                          <option value="option6">10 Orang</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        className="p-4 text-sm font-bold text-gray-800 bg-gray-100 whitespace-nowrap w-1/3"
                      >
                        Foto Profil Kelompok
                      </td>
                      <td className="p-4 text-base font-normal text-gray-700 whitespace-nowrap">
                        <div
                          className="border-dashed border-2 border-gray-400 p-4 mb-4"
                          onDrop={handleDrop}
                          onDragOver={handleDragOver}
                        >
                          {image ? (
                            <img
                              src={image}
                              alt="Uploaded"
                              className="max-w-full h-auto"
                            />
                          ) : (
                            <p>Drag & drop gambar di sini</p>
                          )}
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageInput}
                          className="hidden"
                          id="imageInput"
                        />
                        <label
                          htmlFor="imageInput"
                          className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
                        >
                          Pilih Gambar
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        className="p-4 text-sm font-bold text-gray-800 bg-gray-100 whitespace-nowrap w-1/3"
                      >
                        Kode Invite <br />
                        <span className="text-sm font-normal text-gray-600">
                          <span className="text-red-600">*</span> Kode invite
                          digunakan untuk <br /> Mardika masuk ke dalam <br />{" "}
                          kelompokmu
                        </span>
                      </td>
                      <td className="p-4 text-base font-normal text-gray-700 whitespace-nowrap bg-white">
                        {isGenerated ? (
                          <>
                            <div className="flex gap-3">
                              <button
                                onClick={generateCode}
                                className="px-4 py-2 text-sm font-medium bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-40"
                              >
                                Generate Kode
                              </button>
                              <input
                                type="text"
                                value={inviteCode}
                                readOnly
                                className="border w-3/4 p-2 rounded-md mr-2 bg-slate-200"
                              />
                              <button
                                onClick={handleCopyClick}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                              >
                                {copied ? "Kode telah disalin!" : "Salin Kode"}
                              </button>
                            </div>
                          </>
                        ) : (
                          <button
                            onClick={generateCode}
                            className="px-4 py-2 text-sm font-medium bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-40"
                          >
                            Generate Kode
                          </button>
                        )}
                      </td>
                    </tr>
                  </table>
                  <p className="mt-3 text-gray-600 text-base inline">
                    Setelah kelompok terbuat, jangan lupa untuk share kode
                    invite kepada Mardika di bawah asuhanmu agar mereka segera
                    bergabung ke dalam kelompok. Dengan begini, kamu dan
                    Mardika-mu bisa memulai kegiatan apapun dengan menggunakan
                    platform Skole Indonesia.
                  </p>
                </div>
                <div className="bg-gray-100 px-6 py-3 flex justify-end gap-4">
                  <button
                    className="px-5 py-2 text-base font-normal text-gray-800 transition-colors duration-200 bg-white border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white w-auto"
                    onClick={closeModal}
                  >
                    <span>Kembali</span>
                  </button>
                  <button
                    className="px-5 py-2 text-base font-normal text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 w-auto"
                    onClick={afterRequest}
                  >
                    <span>Buat Kelompok</span>
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
                  <h3 className="text-lg font-bold leading-6 text-green-600 capitalize text-center">
                    Kamu Berhasil Membuat Kelompok
                  </h3>
                  <p className="mt-3 text-gray-600 text-base inline text-center">
                    Kamu telah berhasil membuat kelompok dengan nama "<b>Senang Belajar</b>". Jangan lupa untuk berbagi kode invite dengan
                    Mardika-mu. Namun, jika kamu tidak mempunyai Mardika, kamu
                    bisa menunggu sampai kelompokmu mendapat permohonan
                    bergabung dari Mardika yang tidak mempunyai Dewantara Muda.
                  </p>
                </div>
                <div className="bg-gray-100 p-4 flex justify-center">
                  <button
                    className="px-5 py-2 text-base font-normal text-gray-800 transition-colors duration-200 bg-white border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white w-auto"
                    onClick={closeRequest}
                  >
                    <span>Kembali ke Kelompok</span>
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
