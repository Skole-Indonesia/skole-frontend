import React, { useState, useEffect } from "react";
import HeroIcon from "../../../Assets/Images/LandingPage/Home/hero.svg";
import BannerIcon from "../../../Assets/Images/LandingPage/Home/bannerIcon.svg";
import classroomIcon from "../../../Assets/Images/LandingPage/Home/classroomIcon.svg";
import liveClassIcon from "../../../Assets/Images/LandingPage/Home/liveClassIcon.svg";
import consultationIcon from "../../../Assets/Images/LandingPage/Home/consultationIcon.svg";
import discussionIcon from "../../../Assets/Images/LandingPage/Home/discussionIcon.svg";
import rankBoardIcon from "../../../Assets/Images/LandingPage/Home/rankBoardIcon.svg";
import benefitIcon1 from "../../../Assets/Images/LandingPage/Home/benefitIcon1.webp";
import benefitIcon2 from "../../../Assets/Images/LandingPage/Home/benefitIcon2.webp";
import benefitIcon3 from "../../../Assets/Images/LandingPage/Home/benefitIcon3.webp";
import benefitIcon4 from "../../../Assets/Images/LandingPage/Home/benefitIcon4.webp";
import benefitIcon5 from "../../../Assets/Images/LandingPage/Home/benefitIcon5.webp";
import benefitIcon6 from "../../../Assets/Images/LandingPage/Home/benefitIcon6.webp";
import "./style.css";
import { Link } from "react-router-dom";

const index = () => {
  const [days, setDays] = useState(6);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(58);
  const [seconds, setSeconds] = useState(4);

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            if (days > 0) {
              setDays(days - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            }
          }
        }
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);
  return (
    <>
      <div className="mt-16">
        <section className="mt-6 w-full bg-center bg-cover h-[140vh] bg-hero">
          <div className="container px-6 py-16 mx-auto">
            <div className="items-center lg:flex">
              <div className="w-full lg:w-3/5">
                <div className="lg:max-w-lg">
                  <h1 className="text-3xl font-semibold text-white lg:text-4xl mt-0 lg:mt-20">
                    Wujudkan Mimpimu Bersama <br /> Skole Indonesia
                  </h1>
                  <p className="mt-3 mb-6 text-white">
                    Di Skole, kamu bisa belajar sambil bermain loh. Seru bukan?
                    Yuk kita mulai sekarang!
                  </p>
                  <Link
                    className="text-sm w-1/2 md:w-auto font-medium bg-slate-100 rounded-lg hover:bg-white text-primary px-4 py-2.5 duration-300 transition-colors focus:outline-none"
                    to="/auth/masuk"
                  >
                    Let's Go!
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-2/5">
                <img
                  className="w-full h-full lg:max-w-3xl"
                  src={HeroIcon}
                  alt="Skole Icon"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-blue-700 to-slate-200 lg:flex lg:w-full lg:shadow-md lg:rounded-xl">
              <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-2/3">
                <h2 className="text-2xl font-semibold text-white md:text-3xl">
                  Judul Banner
                </h2>
                <p className="mt-4 text-white">
                  Deskripsi banner Lorem, ipsum dolor.
                </p>
                <div className="flex flex-col md:flex-row bg-white w-min px-6 py-4 my-4 rounded-lg gap-x-4 justify-center">
                  <h1 className="text-xl font-semibold whitespace-nowrap text-black md:text-2xl block">
                    Promo berakhir pada
                  </h1>
                  <div className="flex justify-center items-center gap-x-2">
                    <div
                      className={`flex justify-center gap-x-2 items-center text-base font-normal text-black md:text-2xl ${
                        days > 0 ? "" : ""
                      }`}
                    >
                      <h1 className="text-red-500 font-semibold">{days}</h1>
                      <span>Hari</span>
                    </div>
                    <p>:</p>
                    <div
                      className={`flex justify-center gap-x-2 items-center text-base font-normal text-black md:text-2xl ${
                        hours > 0 ? "" : ""
                      }`}
                    >
                      <h1 className="text-red-500 font-semibold">{hours}</h1>
                      <span>Jam</span>
                    </div>
                    <p>:</p>
                    <div
                      className={`flex justify-center gap-x-2 items-center text-base font-normal text-black md:text-2xl ${
                        minutes > 0 ? "" : ""
                      }`}
                    >
                      <h1 className="text-red-500 font-semibold">{minutes}</h1>
                      <span>Menit</span>
                    </div>
                    <p>:</p>
                    <div
                      className={`flex justify-center gap-x-2 items-center text-base font-normal text-black md:text-2xl ${
                        seconds > 0 ? "" : ""
                      }`}
                    >
                      <h1 className="text-red-500 font-semibold">{seconds}</h1>
                      <span>Detik</span>
                    </div>
                  </div>
                </div>
                <div className="flex mt-6 items-center gap-2">
                  <p className="text-white">
                    Yuk segera cek produk Skole supaya kamu tidak ketinggalan!
                  </p>
                  <a
                    href="#"
                    className="flex items-center text-sm text-slate-200 capitalize hover:underline hover:text-white"
                  >
                    <span className="mx-1">Lihat Promo</span>
                    <svg
                      className="w-4 h-4 mx-1 rtl:-scale-x-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="lg:w-1/3 py-6">
                <div className="h-64 bg-cover lg:h-full">
                  <img src={BannerIcon} alt="Banner Icon" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product">
          <div className="bg-white">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
              <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl">
                Yuk cobain produk keren dari Skole!
              </h2>
              <p className="max-w-4xl mt-2 mb-6 text-center text-gray-500">
                Pilih yang kamu suka dari beragam pilihan produk menarik Skole
                dibawah ini
              </p>
              <div className="grid grid-cols-1 gap-4 mt-8 xl:mt-12 md:grid-cols-2 xl:grid-cols-5">
                {/* Product Cards */}
                {/* Card 1: Classroom */}
                <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg">
                  <img
                    className="object-cover w-full h-56"
                    src={classroomIcon}
                    alt="avatar"
                  />
                  <div className="py-5 px-4 text-justify">
                    <h2 className="block text-xl font-bold text-gray-800">
                      Classroom
                    </h2>
                    <p className="text-sm text-gray-700">
                      Belajar secara terstruktur dan terarah serta mengasyikkan.
                      Tidak hanya belajar, kamu juga bisa bermain loh. Tunggu
                      apalagi? yuk cobain Classroom sekarang! 👇
                    </p>
                    <a
                      href="#"
                      className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600"
                    >
                      <span className="mx-1">Selengkapnya</span>
                      <svg
                        className="w-4 h-4 mx-1 rtl:-scale-x-100"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Card 2: Live Class */}
                <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg">
                  <img
                    className="object-cover w-full h-56"
                    src={liveClassIcon}
                    alt="avatar"
                  />
                  <div className="py-5 px-4 text-justify">
                    <h2 className="block text-xl font-bold text-gray-800">
                      Live Class
                    </h2>
                    <p className="text-sm text-gray-700">
                      Kamu bisa belajar langsung dari mentor handal di Live
                      Class! Kelas ini diadakan satu bulan sekali. Jangan sampai
                      ketinggalan dan pastikan kamu hadir ya.
                    </p>
                    <a
                      href="#"
                      className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600"
                    >
                      <span className="mx-1">Selengkapnya</span>
                      <svg
                        className="w-4 h-4 mx-1 rtl:-scale-x-100"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Card 3: Consultation Session */}
                <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg">
                  <img
                    className="object-cover w-full h-56"
                    src={consultationIcon}
                    alt="avatar"
                  />
                  <div className="py-5 px-4 text-justify">
                    <h2 className="block text-xl font-bold text-gray-800">
                      Consultation Session
                    </h2>
                    <p className="text-sm text-gray-700">
                      Consultation Session adalah sesi konsultasi bersama
                      praktisi dibidang psikologi. Kamu bisa berkonsultasi
                      mengenai apapun! bakat, minat dan masa depanmu.
                    </p>
                    <a
                      href="#"
                      className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600"
                    >
                      <span className="mx-1">Selengkapnya</span>
                      <svg
                        className="w-4 h-4 mx-1 rtl:-scale-x-100"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Card 4: Discussion */}
                <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg">
                  <img
                    className="object-cover w-full h-56"
                    src={discussionIcon}
                    alt="avatar"
                  />
                  <div className="py-5 px-4 text-justify">
                    <h2 className="block text-xl font-bold text-gray-800">
                      Discussion
                    </h2>
                    <p className="text-sm text-gray-700">
                      Pertanyaan tersulitmu akan terjawab disini! Tanyakan
                      pertanyaanmu dan dapatkan feedback. Bagi yang menjawab
                      akan mendapat poin. Menarik bukan?
                    </p>
                    <a
                      href="#"
                      className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600"
                    >
                      <span className="mx-1">Selengkapnya</span>
                      <svg
                        className="w-4 h-4 mx-1 rtl:-scale-x-100"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Card 5: Rank Board */}
                <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg">
                  <img
                    className="object-cover w-full h-56"
                    src={rankBoardIcon}
                    alt="avatar"
                  />
                  <div className="py-5 px-4 text-justify">
                    <h2 className="block text-xl font-bold text-gray-800">
                      Rank Board
                    </h2>
                    <p className="text-sm text-gray-700">
                      Berkompetisi bersama teman itu menyenangkan. Yuk lihat
                      siapa peringkat teratas kali ini.
                    </p>
                    <a
                      href="#"
                      className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600"
                    >
                      <span className="mx-1">Selengkapnya</span>
                      <svg
                        className="w-4 h-4 mx-1 rtl:-scale-x-100"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="benefit">
          <div className="bg-white">
            <div className="container px-6 py-10 mx-auto">
              <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                Apa saja manfaat yang bisa kamu dapatkan di Skole?
              </h1>
              <div className="grid grid-cols-1 gap-4 mt-8 xl:mt-12 md:grid-cols-2 xl:grid-cols-3">
                {/* Benefit Cards */}
                {/* Card 1: Akses Pendidikan yang mudah */}
                <div className="flex flex-col items-center p-4 space-y-3 text-center hover:bg-gray-100 rounded-xl">
                  <img src={benefitIcon1} alt="" />
                  <h1 className="text-xl font-semibold text-gray-700 capitalize">
                    Akses Pendidikan yang mudah
                  </h1>
                  <p className="text-gray-500">
                    Kamu bisa belajar dari manapun dan kapanpun kamu mau.
                  </p>
                </div>

                {/* Card 2: Tracking Perkembangan Belajar */}
                <div className="flex flex-col items-center p-4 space-y-3 text-center hover:bg-gray-100 rounded-xl">
                  <img src={benefitIcon2} alt="" />
                  <h1 className="text-xl font-semibold text-gray-700 capitalize">
                    Tracking Perkembangan Belajar
                  </h1>
                  <p className="text-gray-500">
                    Belajar semakin teratur dan terarah karena bisa
                    berkonsultasi dengan para guru.
                  </p>
                </div>

                {/* Card 3: Talent Mapping & Planning */}
                <div className="flex flex-col items-center p-4 space-y-3 text-center hover:bg-gray-100 rounded-xl">
                  <img src="/src/assets/landingpage/benefitIcon3.svg" alt="" />
                  <img src={benefitIcon3} alt="" />
                  <h1 className="text-xl font-semibold text-gray-700 capitalize">
                    Talent Mapping & Planning
                  </h1>
                  <p className="text-gray-500">
                    Kamu juga bisa loh berkonsultasi seputar minat dan bakat
                    serta masa depanmu!
                  </p>
                </div>

                {/* Card 4: Live Class */}
                <div className="flex flex-col items-center p-4 space-y-3 text-center hover:bg-gray-100 rounded-xl">
                  <img src="/src/assets/landingpage/benefitIcon4.svg" alt="" />
                  <img src={benefitIcon4} alt="" />

                  <h1 className="text-xl font-semibold text-gray-700 capitalize">
                    Live Class
                  </h1>
                  <p className="text-gray-500">
                    Ada kelas yang dibawakan langsung oleh mentor handal loh.
                    Pastikan kamu tidak ketinggalan ya.
                  </p>
                </div>

                {/* Card 5: Forum Diskusi */}
                <div className="flex flex-col items-center p-4 space-y-3 text-center hover:bg-gray-100 rounded-xl">
                  <img src="/src/assets/landingpage/benefitIcon5.svg" alt="" />
                  <img src={benefitIcon5} alt="" />

                  <h1 className="text-xl font-semibold text-gray-700 capitalize">
                    Forum Diskusi
                  </h1>
                  <p className="text-gray-500">
                    Pertanyaan tersulitmu akan bisa terjawab jika kamu
                    membaginya pada Forum Diskusi.
                  </p>
                </div>

                {/* Card 6: Rank Board */}
                <div className="flex flex-col items-center p-4 space-y-3 text-center hover:bg-gray-100 rounded-xl">
                  <img src="/src/assets/landingpage/benefitIcon6.svg" alt="" />
                  <img src={benefitIcon6} alt="" />

                  <h1 className="text-xl font-semibold text-gray-700 capitalize">
                    Rank Board
                  </h1>
                  <p className="text-gray-500">
                    Berkompetisi bersama teman itu seru loh! Yuk lihat peringkat
                    teman-temanmu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-center bg-cover h-[94vh] bg-cta">
          <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h2 className="mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl">
              Tunggu apalagi? Yuk mulai pembelajaran dengan Skole!
            </h2>
            <p className="max-w-4xl mt-4 text-center text-gray-500">
              Klik tombol dibawah ini untuk langsung login ke Skole Indonesia
              dan nikmati pengalaman belajar yang seru!
            </p>
            <div className="inline-flex w-full mt-6 sm:w-auto">
              <Link
                to="/auth/register"
                className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
