import React, { useState } from "react";
import Navbar from "@Layouts/Navbar";
import Sidebar from "@Layouts/Sidebar";
import { Link } from "react-router-dom";
import Sampul from "../../../Assets/Images/DewantaraMuda/sampul.png";
import IconProfile from "../../../Assets/Images/DewantaraMuda/iconProfile.png";
import Profile from "../../../Assets/Images/DewantaraMuda/profile.png";
import Paste from "../../../Assets/Images/DewantaraMuda/salin.png";
import Pengumuman from "../../../Assets/Images/DewantaraMuda/pesan.png";

const index = () => {
  const [inputValue, setInputValue] = useState("");

  // Event handler for input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

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
  const [link, setLink] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  const [isGenerated, setIsGenerated] = useState(false);

  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
  };
  const handleLink = (event) => {
    setLink(event.target.value);
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
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <img
            src={Sampul}
            alt=""
            className="w-full absolute h-[60vh] object-cover"
          />
          <section className="container mx-auto p-6 mt-[60vh]">
            <section className="bg-white">
              <div className="container grid grid-cols-1 gap-10 px-6 py-12 mx-auto lg:grid-cols-3">
                <div className="col-span-2">
                  <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
                    Senang Belajar
                  </h1>
                  <p className="mt-3 text-gray-500">
                    Kami adalah kelompok Senang Belajar yang berasal dari Solo,
                    Jawa Tengah. Study hard, play hard.
                  </p>
                  <div className="flex gap-4 items-center mt-4">
                    <img src={IconProfile} alt="" className="w-10 h-10" />
                    <h1 className="text-lg font-semibold text-gray-800 md:text-xl">
                      Dewantara Muda
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-4 max-w-xl p-4 border rounded-xl">
                    <div className="flex gap-4 items-center">
                      <img src={Profile} alt="" className="w-8 h-8" />
                      <h1 className="text-lg font-normal text-gray-800">
                        Akulah Arjuna
                      </h1>
                    </div>
                    <Link className="text-blue-500 hover:text-blue-600">
                      Edit Profile
                    </Link>
                  </div>
                  <div className="flex gap-4 items-center mt-4">
                    <img src={Paste} alt="" className="w-10 h-10" />
                    <h1 className="text-lg font-semibold text-gray-800 md:text-xl">
                      Posting Materi
                    </h1>
                  </div>
                  <div className="flex gap-4 items-center mt-4 max-w-xl p-4 border rounded-xl">
                    <img src={Profile} alt="" className="w-8 h-8" />
                    <h1 className="text-lg font-normal text-gray-800 whitespace-nowrap">
                      Akulah Arjuna
                    </h1>
                    <button onClick={openModal} className="w-full">
                      <input
                        type="text"
                        placeholder="Buat dan Posting Materimu Sekarang (Klik Disini)"
                        className="w-full active:border-none outline-none"
                        onChange={handleInputChange}
                      />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="card border border-gray-300 rounded-xl p-6">
                    <div className="flex gap-4 items-center">
                      <img src={Paste} alt="" className="w-10 h-10" />
                      <h1 className="text-lg font-semibold text-gray-800 md:text-xl">
                        Kode Invite Kelompok
                      </h1>
                    </div>
                    <div className="flex gap-4 items-center justify-between mt-4">
                      <h1 className="text-xl font-bold text-blue-500">
                        SB0308
                      </h1>
                      <Link className="flex items-center gap-4 bg-blue-50 px-4 py-3 rounded-md text-blue-600 font-medium">
                        Salin Kode
                        <img src={Paste} alt="" className="w-6 h-6" />
                      </Link>
                    </div>
                    <div className="flex gap-4 items-center mt-4">
                      <p className="text-slate-600">
                        Bagikan kode invite kelompokmu kepada Mardika-mardikamu
                        agar mereka segera bergabung ke dalam kelompok.
                      </p>
                    </div>
                  </div>
                  <div className="card border border-gray-300 rounded-xl p-6">
                    <div className="flex gap-4 items-center">
                      <img src={Pengumuman} alt="" className="w-10 h-10" />
                      <h1 className="text-lg font-semibold text-gray-800 md:text-xl">
                        Pengumuman
                      </h1>
                    </div>
                    <div className="flex gap-4 mt-4 flex-col">
                      <p className="text-slate-600">Tidak ada pengumuman.</p>
                      <button className="bg-blue-50 px-4 py-3 rounded-md text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-all delay-200 ">
                        Buat Pengumuman
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="fixed bg-black bg-opacity-75 top-0 left-0 w-full h-screen">
            <div className="container-fluid px-6 mx-auto flex justify-center items-center h-full">
              <div className="card bg-white rounded-md w-full lg:w-1/2 overflow-auto min-h-min max-h-full">
                <div className="p-6 flex flex-col space-y-4">
                  <h3 className="text-lg font-bold leading-6 text-gray-800 capitalize">
                    Buat Materi
                  </h3>
                  <p className="mt-3 text-gray-600 text-base inline">
                    Materi terdiri dari judul, deskripsi, file materi, dan link
                    kelas online. File materi dan link kelas online bersifat
                    opsional. Jika hanya mengadakan kelas online tanpa file
                    materi, maka file materi tidak perlu di-upload.
                  </p>
                  <table className="min-w-full divide-y rounded-md">
                    <tr>
                      <td
                        scope="col"
                        className="p-4 text-sm font-bold text-gray-800 bg-gray-100 whitespace-nowrap w-1/3"
                      >
                        Judul Materi
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
                          placeholder="Masukkan Judul Materi"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        className="p-4 text-sm font-bold text-gray-800 bg-gray-100 whitespace-nowrap w-1/3"
                      >
                        Deskripsi Materi
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                        <textarea
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                          rows="6"
                          placeholder="Masukkan Deskripsi Materi"
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
                        File Materi
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
                            <p>Drag & drop file disini di sini</p>
                          )}
                        </div>
                        <input
                          type="file"
                          // accept="image/*"
                          onChange={handleImageInput}
                          className="hidden"
                          id="imageInput"
                        />
                        <label
                          htmlFor="imageInput"
                          className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
                        >
                          Pilih File
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        className="p-4 text-sm font-bold text-gray-800 bg-gray-100 whitespace-nowrap w-1/3"
                      >
                        Link Kelas <br />
                        <span className="text-sm font-normal text-gray-600">
                          <span className="text-red-600">*</span> Masukkan link
                          kelas <br /> apabila kamu berencana <br /> ingin
                          melaksanakan <br /> kelas online
                        </span>
                      </td>
                      <td className="p-4 text-base font-normal text-gray-700 whitespace-nowrap bg-white">
                        <input
                          type="text"
                          value={link}
                          onChange={handleLink}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                        />
                      </td>
                    </tr>
                  </table>
                  <p className="mt-3 text-gray-600 text-base inline">
                    Materi yang kamu buat akan langsung bisa dilihat oleh
                    Mardika yang menjadi anggota kelompokmu. Kamu bisa mengedit
                    materimu nanti apabila kamu ingin merubahnya.
                  </p>
                </div>
                <div className="bg-gray-100 px-6 py-3 flex justify-end gap-4">
                  <button
                    className="px-5 py-2 text-base font-normal text-gray-800 transition-colors duration-200 bg-white border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white w-auto"
                    onClick={closeModal}
                  >
                    <span>Kembali</span>
                  </button>
                  <Link
                    to="/dewantara-muda/kelompok-update"
                    className="px-5 py-2 text-base font-normal text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 w-auto"
                    // onClick={afterRequest}
                  >
                    <span>Posting Materi Sekarang</span>
                  </Link>
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
