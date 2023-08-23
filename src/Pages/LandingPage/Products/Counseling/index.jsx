import React from "react";
// LAYOUTS
import Navbar from "@Layouts/Navbar";
import Footer from "@Layouts/Footer";

// COMPONENT
import Hero from "@Components/Hero";
import Button from "@Components/Button";
import PackageCarousel from "@Components/Carousel/ConsultingPackage";
import Accordion from "@Components/Accordion";

// IMAGES
import heroCounseling from "@Assets/Images/LandingPage/Products/Counseling/heroCounseling.webp";
import aboutCounseling from "@Assets/Images/LandingPage/Products/Counseling/aboutCounseling.webp";
import ctaCounseling from "@Assets/Images/LandingPage/Products/Counseling/ctaCounseling.webp";
import listOfStepsCounseling from "@Assets/Images/LandingPage/Products/Counseling/listOfStepsCounseling.webp";
import flowCounseling from "@Assets/Images/LandingPage/Products/Counseling/flowCounseling.webp";

const index = () => {
  return (
    <>
      <Navbar className="fixed" />
      <Hero
        heading={`Yuk Konseling dengan </br> Konselor <span class="text-blue-500 font-bold text-5xl">Berpengalaman</span> <img src="../../../../Assets/Images/LandingPage/Products/Counseling/decorationText.webp">`}
        subHeading={`Kamu sedang mengalami masalah? Atau ingin menceritakan sesuatu yang terpendam? Konsultasikan sesegera mungkin dengan Konselor terbaik dan terpercaya Skole Indonesia sekarang juga!`}
        buttonClassName={`bg-blue-500 text-white focus:bg-blue-600 hover:bg-blue-600`}
        buttonText={`Daftar Konseling Sekarang`}
        imageUrl={heroCounseling}
      />
      <section className="about">
        <div className="container mx-auto text-center px-6 py-16">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-5xl">
            Apa itu Konseling?
          </h1>
          <p className="mt-3 text-gray-600 text-sm lg:text-lg">
            Konseling adalah sesi konsultasi{" "}
            <span className="font-bold text-gray-800">one-on-one</span> antara
            dua orang yaitu peserta dan konselor dengan tujuan untuk mengatasi
            segala permasalahan yang dihadapi oleh peserta.
          </p>
          <div className="items-center lg:flex">
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-sm"
                src={aboutCounseling}
                alt="Icon About Counseling"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-2xl text-start">
                <h1 className="text-xl font-semibold text-gray-800 lg:text-3xl">
                  3 Alasan Untuk Mengikuti Konseling di Skole Indonesia
                </h1>
                <div className="flex gap-4 flex-col mt-4">
                  <button className="flex bg-blue-500 p-3 rounded-full text-white justify-start items-center gap-3 w-full">
                    <div className="text-blue-500 h-10 w-10 bg-white flex items-center justify-center rounded-full">
                      1
                    </div>
                    <span className="text-white text-sm lg:text-lg">
                      Konselor Berpengalaman di Bidangnya
                    </span>
                  </button>
                  <button className="flex bg-blue-500 p-3 rounded-full text-white justify-start items-center gap-3 w-full">
                    <div className="text-blue-500 h-10 w-10 bg-white flex items-center justify-center rounded-full">
                      2
                    </div>
                    <span className="text-white text-sm lg:text-lg">
                      Keuntungan kedua
                    </span>
                  </button>
                  <button className="flex bg-blue-500 p-3 rounded-full text-white justify-start items-center gap-3 w-full">
                    <div className="text-blue-500 h-10 w-10 bg-white flex items-center justify-center rounded-full">
                      3
                    </div>
                    <span className="text-white text-sm lg:text-lg">
                      Keuntungan Ketiga
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container mx-auto px-6 py-16">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-3/5">
              <div className="lg:max-w-2xl text-start">
                <h1 className="text-xl font-semibold text-gray-800 lg:text-5xl">
                  Konselor di Skole Indonesia
                </h1>
                <p className="text-gray-600 text-sm lg:text-lg">
                  Konselor Skole Indonesia merupakan konselor berpengalaman di
                  bidangnya. Kamu bisa melihat seluruh profil konselor yang ada
                  melalui tombol di bawah ini.
                </p>
                <Button
                  className={`bg-blue-500 text-white focus:bg-blue-600 hover:bg-blue-600`}
                  text={`Lihat Konselor Skole Indonesia`}
                />
              </div>
            </div>
            <div className="w-full lg:mt-0 lg:w-2/5">
              <img
                className="w-full h-full lg:max-w-sm"
                src={ctaCounseling}
                alt="Icon About Counseling"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="package-card">
        <div className="container mx-auto px-6 py-16">
          <div className="header text-center">
            <h1 className="text-2xl font-semibold text-gray-800 lg:text-5xl">
              Pilihan Paket Konseling
            </h1>
            <p className="mt-3 text-gray-600 text-sm lg:text-lg">
              Paket konseling Skole Indonesia telah disesuaikan dengan
              masing-masing tingkatan kebutuhan untuk siapapun yang ingin
              berkonsultasi.
            </p>
          </div>

          <PackageCarousel />
        </div>
      </section>

      <section className="flow-consultation">
        <div className="container mx-auto px-6 py-16">
          <div className="header">
            <h1 className="text-xl font-semibold text-gray-800 lg:text-5xl">
              Alur Konseling Skole Indonesia
            </h1>
            <p className="text-gray-600 text-sm lg:text-lg">
              Berikut adalah langkah-langkah bagaimana kamu bisa mendaftar
              hingga akhirnya mengikuti sesi konseling.
            </p>
          </div>
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <img
                className="w-full h-full md:max-w-2xl"
                src={listOfStepsCounseling}
                alt="Icon List of Steps Counseling"
              />
            </div>
            <div className="w-full lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full md:max-w-xl"
                src={flowCounseling}
                alt="Icon Flow Counseling"
              />
            </div>
          </div>
        </div>
      </section>

      <Accordion
        data={[
          {
            question: "How can I pay for my appointment?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
          },
          {
            question:
              "Is the cost of the appointment covered by private health insurance?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
          },
          {
            question: "Do I need a referral?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
          },
        ]}
      />
      <Footer />
    </>
  );
};

export default index;
