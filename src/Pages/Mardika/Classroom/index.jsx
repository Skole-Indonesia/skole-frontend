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
        <section className="container mx-auto px-6 py-16">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-5xl">
            Classroom
          </h1>
          <p className="mt-3 text-gray-600 text-sm lg:text-lg">
            Classroom memungkinkanmu untuk belajar berbagai mata pelajaran
            sekolah menengah atas baik dari rumpun sains ataupun sosial. Kamu
            bisa mengakses pelajaran yang sedang maupun telah selesai dipelajari
            melalui halaman dashboard ini. Jika kamu ingin mengakses halaman
            Classroom, klik tombol di bawah ini.
          </p>
          <Button
            className="bg-gray-100 border-blue-500 border text-blue-500"
            text="Berkunjung ke Classroom"
          />

          <div className="flex mt-6 gap-2">
            <Button className="bg-blue-500 text-white" text="Semua" />
            <Button
              className="bg-gray-100 border-slate-400 border text-slate-600"
              text="Sedang dipelajari"
            />
            <Button
              className="bg-gray-100 border-slate-400 border text-slate-600"
              text="Selesai dipelajari"
            />
          </div>

          <div className="mt-6">
            <h1 className="text-xl font-semibold text-gray-800 lg:text-3xl">
              Sedang dipelajari
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center -mt-16 md:justify-end">
                  <img
                    className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full"
                    alt="Testimonial avatar"
                    src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                  />
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-800 md:mt-0">
                  Design Tools
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  dolores deserunt ea doloremque natus error, rerum quas odio
                  quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                  minus consequuntur!
                </p>
                <div className="flex justify-end mt-4">
                  <a
                    href="#"
                    className="text-lg font-medium text-blue-600"
                    tabIndex={0}
                    role="link"
                  >
                    John Doe
                  </a>
                </div>
              </div>

              <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center -mt-16 md:justify-end">
                  <img
                    className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full"
                    alt="Testimonial avatar"
                    src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                  />
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-800 md:mt-0">
                  Design Tools
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  dolores deserunt ea doloremque natus error, rerum quas odio
                  quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                  minus consequuntur!
                </p>
                <div className="flex justify-end mt-4">
                  <a
                    href="#"
                    className="text-lg font-medium text-blue-600"
                    tabIndex={0}
                    role="link"
                  >
                    John Doe
                  </a>
                </div>
              </div>

              <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center -mt-16 md:justify-end">
                  <img
                    className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full"
                    alt="Testimonial avatar"
                    src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                  />
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-800 md:mt-0">
                  Design Tools
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  dolores deserunt ea doloremque natus error, rerum quas odio
                  quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                  minus consequuntur!
                </p>
                <div className="flex justify-end mt-4">
                  <a
                    href="#"
                    className="text-lg font-medium text-blue-600"
                    tabIndex={0}
                    role="link"
                  >
                    John Doe
                  </a>
                </div>
              </div>
            </div>
            <h1 className="mt-4 text-xl font-semibold text-gray-800 lg:text-3xl">
              Selesai dipelajari
            </h1>
            <p className="mt-3 text-gray-600 text-sm lg:text-lg">
              Belum ada pelajaran yang selesai.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
