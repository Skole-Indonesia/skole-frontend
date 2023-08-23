import React, { useState } from "react";
import Navbar from "@Layouts/Navbar";
import Sidebar from "@Layouts/Sidebar";
import Button from "@Components/Button";

const index = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    username: "Muhammad Hafidz",
    email: "mhafidz123@gmail.com",
    phone: "0851-6293-0473",
    address: "Jl. Merak 15, Semarang, Jawa Tengah",
    birthPlace: "Semarang, 24 Februari 2006",
    school: "SMA Negeri Ngantukan",
  });

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    // Handle the save logic here if needed
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar className="relative" />
      <div className="flex">
        <Sidebar />
        <section className="h-[90vh] overflow-auto w-full">
          <div className="container mx-auto px-6 py-16 ">
            <h1 className="text-2xl font-semibold text-gray-800 lg:text-5xl">
              Pengaturan
            </h1>
            <div className="flex mt-6 gap-2">
              <Button
                className="bg-blue-500 text-white"
                text="Pengaturan Akun"
              />
              <Button
                className="bg-gray-100 border-slate-400 border text-slate-600"
                text="Ganti Password"
              />
            </div>

            <div className="mt-6">
              <h1 className="text-xl font-bold text-gray-800">
                Pengaturan Akun
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Kamu bisa mengedit datamu langsung disini. Namun perlu diingat,
                data yang dimasukkan merupakan informasi jelas dan apa adanya
                tentang dirimu.
              </p>
            </div>

            <form className="mt-6 border border-slate-4 p-6 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div>
                    <label className="text-gray-700" htmlFor="username">
                      Nama Lengkap
                    </label>
                    <input
                      id="username"
                      type="text"
                      name="username"
                      value={formData.username}
                      readOnly={!editMode}
                      onChange={handleInputChange}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="mt-3">
                    <label class="text-gray-700" for="username">
                      Email
                    </label>
                    <input
                      id="username"
                      type="text"
                      value="mhafidz123@gmail.com"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="mt-3">
                    <label class="text-gray-700" for="username">
                      No. Hp
                    </label>
                    <input
                      id="username"
                      type="text"
                      value="0851-6293-0473"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="mt-3">
                    <label class="text-gray-700" for="username">
                      Alamat
                    </label>
                    <input
                      id="username"
                      type="text"
                      value="Jl. Merak 15, Semarang, Jawa Tengah"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label class="text-gray-700" for="username">
                      Tempat Tanggal Lahir
                    </label>
                    <input
                      id="username"
                      type="text"
                      value="Semarang, 24 Februari 2006"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="mt-3">
                    <label class="text-gray-700" for="username">
                      Asal Sekolah
                    </label>
                    <input
                      id="username"
                      type="text"
                      value="SMA Negeri Ngantukan"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="flex justify-end">
              {/* <Button
                className="bg-gray-100 border-slate-400 border text-slate-600"
                text="Edit Informasi Akun"
              />
              <Button
                className="bg-gray-100 border-slate-400 border text-slate-600"
                text="Batal"
              />
              <Button
                className="bg-gray-100 border-slate-400 border text-slate-600"
                text="Simpan Informasi"
              /> */}
              {!editMode && (
                <Button
                  className="bg-gray-100 border-slate-400 border text-slate-600"
                  text="Edit Informasi Akun"
                  onClick={handleEditClick}
                />
              )}
              {editMode && (
                <>
                  <Button
                    className="bg-gray-100 border-slate-400 border text-slate-600"
                    text="Batal"
                    onClick={handleCancelClick}
                  />
                  <Button
                    className="bg-gray-100 border-slate-400 border text-slate-600"
                    text="Simpan Informasi"
                    onClick={handleSaveClick}
                  />
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
