import React, { useState } from "react";
import Navbar from "@Layouts/Navbar";
import Sidebar from "@Layouts/Sidebar";
import Button from "@Components/Button";
import { Link } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
const localizer = momentLocalizer(moment);

const index = () => {
  const events = [
    {
      title: "Agenda 1",
      start: new Date(2023, 8, 12),
      end: new Date(2023, 8, 12),
      allDay: true,
      resource: "Agenda 1 Details",
    },
    {
      title: "Agenda 2",
      start: new Date(2023, 8, 15),
      end: new Date(2023, 8, 15),
      allDay: true,
      resource: "Agenda 2 Details",
    },
    // Add more agenda items with dates
  ];

  const userChats = [
    {
      id: 1,
      name: "Mega Chan",
      profileImg:
        "https://asset-2.tstatic.net/aceh/foto/bank/images/presiden-ke-5-republik-indonesia-megawati-soekarnoputri.jpg",
      message: "Halo, bagaimana kabarmu?",
      timestamp: "2023-09-14 13:30", // Tanggal dan waktu pesan
    },
    {
      id: 2,
      name: "Wati Chan",
      profileImg:
        "https://asset-2.tstatic.net/aceh/foto/bank/images/presiden-ke-5-republik-indonesia-megawati-soekarnoputri.jpg",
      message: "Hai, kabar baik?",
      timestamp: "2023-09-14 13:30", // Tanggal dan waktu pesan
    },
    // Tambahkan data pengguna dan pesan lainnya di sini
  ];

  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    console.log("Pesan yang akan dikirim:", message);
    setMessage("");
  };

  const handleToggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiSelect = (emoji) => {
    setMessage(`${message}${emoji.native}`);
    setShowEmojiPicker(false);
  };

  return (
    <>
      <Navbar className="relative" />
      <div className="flex bg-slate-50">
        <Sidebar />
        <section className="h-[90vh] overflow-auto w-full">
          <div className="container mx-auto px-6 py-16 ">
            <h1 className="text-2xl font-semibold text-gray-800 lg:text-4xl">
              Selamat Datang, Muhammad Hafidz
            </h1>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-800 lg:text-2xl">
                Aktivitas Dashboard
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Cek aktivitas di dashboard untuk memantau
              </p>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-6">
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <div className="flex justify-between">
                      <p className="mt-1 text-lg font-semibold text-slate-800">
                        Jadwal Saya
                      </p>
                      <a href="#" className="text-blue-500">
                        See more
                      </a>
                    </div>
                    <div>
                      <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500 }} // Set the height of the calendar
                        views={["month"]} // Display only the month view
                        popup
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                  <div className="col-span-2 space-y-6">
                    <div className="bg-white rounded-lg shadow-lg p-4">
                      <div className="flex justify-between">
                        <p className="mt-1 text-lg font-semibold text-slate-800">
                          Perjanjian Hari Ini
                        </p>
                        <Link to="#" className="text-blue-500 underline">
                          See more
                        </Link>
                      </div>
                      <div className="mt-4 bg-slate-100 p-4">
                        <div className="flex">Zoom</div>
                        <div className="flex justify-between items-center">
                          <div className="flex flex-col">
                            <p className="font-semibold text-slate-800">
                              Mardika
                            </p>
                            <p className="text-slate-400">09.00 - 10.00 WIB</p>
                          </div>
                          <Link to="#" className="text-slate-800 underline">
                            Gabung Sesi Zoom
                          </Link>
                        </div>
                      </div>
                      <div className="mt-4 bg-slate-100 p-4">
                        <div className="flex">Zoom</div>
                        <div className="flex justify-between items-center">
                          <div className="flex flex-col">
                            <p className="font-semibold text-slate-800">
                              Mardika
                            </p>
                            <p className="text-slate-400">09.00 - 10.00 WIB</p>
                          </div>
                          <Link to="#" className="text-slate-800 underline">
                            Gabung Sesi Zoom
                          </Link>
                        </div>
                      </div>
                      <div className="mt-4 bg-slate-100 p-4">
                        <div className="flex">Zoom</div>
                        <div className="flex justify-between items-center">
                          <div className="flex flex-col">
                            <p className="font-semibold text-slate-800">
                              Mardika
                            </p>
                            <p className="text-slate-400">09.00 - 10.00 WIB</p>
                          </div>
                          <Link to="#" className="text-slate-800 underline">
                            Gabung Sesi Zoom
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-4">
                      <div className="flex justify-between">
                        <p className="mt-1 text-lg font-semibold text-slate-800">
                          Forum Komunitas
                        </p>
                        <a href="#" className="text-blue-500 underline">
                          See more
                        </a>
                      </div>

                      {/* Daftar pengguna yang mengirim pesan */}
                      {userChats.map((userChat) => (
                        <div
                          key={userChat.id}
                          className="flex items-center mt-8"
                        >
                          <img
                            src={userChat.profileImg}
                            alt={userChat.name}
                            className="w-12 h-12 rounded-full object-cover mr-4"
                          />
                          <div className="flex flex-col w-full">
                            <div className="flex justify-between items-center w-full">
                              <p className="text-lg font-semibold">
                                {userChat.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {userChat.timestamp}
                              </p>
                            </div>
                            <p className="text-gray-700">{userChat.message}</p>
                          </div>
                        </div>
                      ))}
                      <div className="send-chat mt-4">
                        <div className="flex justify-between items-center">
                          <input
                            type="text"
                            placeholder="Ketik pesan..."
                            value={message}
                            onChange={handleMessageChange}
                            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                          />
                          <button
                            onClick={handleSendMessage}
                            className="bg-blue-500 text-white rounded-full p-2 ml-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                          >
                            Kirim
                          </button>
                        </div>
                        <div className="flex items-center mt-2">
                          {/* Tombol Emoji (gantilah dengan ikon emoji yang sesuai) */}
                          <button
                            onClick={() => handleAddEmoji("🙂")} // Contoh emoji tersenyum
                            className="text-2xl mr-2 focus:outline-none"
                          >
                            😀
                          </button>
                          {/* Tombol Zoom (gantilah dengan ikon zoom yang sesuai) */}
                          <button
                            onClick={() => {
                              // Lakukan sesuatu ketika tombol zoom diklik
                            }}
                            className="text-2xl focus:outline-none"
                          >
                            🔍
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <div className="indicator">Tambah Indikator</div>
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
