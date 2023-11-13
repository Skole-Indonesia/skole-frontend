import React from "react";
import { Link } from "react-router-dom";
import DewantaraMudaIcon from "../Assets/Images/auth/dewantaraMudaIcon.webp";
import KonselorIcon from "../Assets/Images/auth/konselorIcon.webp";
import Testi from "../Assets/Images/auth/testi.webp";

const OptionalForm = ({
  redirect,
  redirectName,
  redirectDewantaraMuda,
  redirectKonselor,
  redirectMardika,
  description,
}) => {
  return (
    <div className="flex justify-center h-screen">
      <div className="flex items-center w-full max-w-2xl px-6 mx-auto lg:w-6/12">
        <div className="flex-1 w-full">
          <div className="text-center">
            <h1 className="text-primary font-semibold text-3xl">
              Selamat Datang di Skole Indonesia
            </h1>
            <p className="mt-3 text-neutral font-normal text-lg">
              Apakah kamu seorang Dewantara Muda atau konselor?
            </p>
          </div>
          <div className="mt-8">
            <form>
              <Link
                to={redirectMardika}
                className="flex max-w-full overflow-hidden bg-white rounded-xl hover:shadow-lg p-4 border border-gray-500 mt-5"
              >
                <img
                  src={DewantaraMudaIcon}
                  className="rounded-full h-20 w-20"
                  alt="Dewantara Muda Icon"
                />
                <div className="md:p-4">
                  <h1 className="text-xl font-bold">Saya seorang Mardika</h1>
                  <p className="mt-2 text-sm text-gray-600">
                    Saya ingin melakukan konsultasi
                  </p>
                </div>
              </Link>
              <Link
                to={redirectDewantaraMuda}
                className="flex max-w-full overflow-hidden bg-white rounded-xl hover:shadow-lg p-4 border border-gray-500 mt-5"
              >
                <img
                  src={DewantaraMudaIcon}
                  className="rounded-full h-20 w-20"
                  alt="Dewantara Muda Icon"
                />
                <div className="md:p-4">
                  <h1 className="text-xl font-bold">
                    Saya seorang Dewantara Muda
                  </h1>
                  <p className="mt-2 text-sm text-gray-600">
                    Saya mengajarkan dan melaporkan perkembangan murid
                  </p>
                </div>
              </Link>
              <Link
                to={redirectKonselor}
                className="flex max-w-full overflow-hidden bg-white rounded-xl hover:shadow-lg p-4 border border-gray-500 mt-5"
              >
                <img
                  src={KonselorIcon}
                  className="rounded-full h-20 w-20"
                  alt="Konselor Icon"
                />
                <div className="md:p-4">
                  <h1 className="text-xl font-bold">
                    Saya seorang Psikolog / Konselor
                  </h1>
                  <p className="mt-2 text-sm text-gray-600">
                    Saya mengajarkan dan melaporkan perkembangan murid
                  </p>
                </div>
              </Link>
            </form>
            <p className="mt-6 text-sm text-center text-gray-400">
              {description}
              <Link
                to={redirect}
                className="text-blue-500 focus:outline-none focus:underline hover:underline"
              >
                {redirectName}
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <div
        className="hidden bg-cover h-full lg:block lg:w-6/12"
        style={{
          backgroundImage: `url(${Testi})`,
        }}
      >
        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
          <div>
            {/* <h2 class="text-2xl font-bold text-white sm:text-3xl">Meraki UI</h2> */}
            {/* <p class="max-w-xl mt-3 text-gray-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
        autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus
        molestiae
      </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionalForm;
