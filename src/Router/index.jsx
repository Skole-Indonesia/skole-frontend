import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

// NO AUTH
import LandingPage from "@Pages/LandingPage";
import Classroom from "@Pages/LandingPage/Products/Classroom";
import Counseling from "@Pages/LandingPage/Products/Counseling";
import LiveClass from "@Pages/LandingPage/Products/LiveClass";
import ForumDiskusi from "@Pages/LandingPage/Products/ForumDiskusi";
import RankBoard from "@Pages/LandingPage/Products/RankBoard";
import Artikel from "@Pages/LandingPage/Artikel";
import TentangKami from "@Pages/LandingPage/TentangKami";
import Kontak from "@Pages/LandingPage/Kontak";
import AuthMasuk from "@Pages/Auth/Masuk";
import AuthMasukMardika from "@Pages/Auth/Masuk/MasukMardika";
import AuthMasukDewantaraMuda from "@Pages/Auth/Masuk/MasukDewantaraMuda";
import AuthMasukKonselor from "@Pages/Auth/Masuk/MasukKonselor";
import AuthRegister from "@Pages/Auth/Register";
import AuthRegisterMardika from "@Pages/Auth/Register/RegisterMardika";
import AuthRegisterDewantaraMuda from "@Pages/Auth/Register/RegisterDewantaraMuda";
import AuthRegisterKonselor from "@Pages/Auth/Register/RegisterKonselor";

// ADMIN
import AdminDashboard from "@Pages/Admin/Dashboard";

// MARDIKA
import MardikaDashboard from "@Pages/Mardika/Dashboard";
import MardikaClassroom from "@Pages/Mardika/Classroom";
import MardikaLiveClass from "@Pages/Mardika/LiveClass";
import MardikaCounseling from "@Pages/Mardika/Counseling";
import MardikaLearningTracking from "@Pages/Mardika/LearningTracking";
import MardikaSettings from "@Pages/Mardika/Settings";
import MardikaFindYourGroup from "@Pages/Mardika/FindYourGroup";

// DEWANTARA MUDA
import DewantaraMudaDashboard from "@Pages/DewantaraMuda/Dashboard";
import DewantaraMudaCreateGroup from "@Pages/DewantaraMuda/CreateGroup";
import DewantaraMudaKelompok from "@Pages/DewantaraMuda/Kelompok";
import DewantaraMudaKelompokUpdate from "@Pages/DewantaraMuda/Kelompok/hasilPosting";
import DewantaraMudaKelompokPengumuman from "@Pages/DewantaraMuda/Kelompok/hasilPengumuman";

// COUNSELOR
import CounselorDashboard from "@Pages/Counselor/Dashboard";
import CounselorMyDate from "@Pages/Counselor/MyDate";

import NotFound from "@Pages/NotFound";

const index = ({ isAuthenticated = true }) => {
  const role = localStorage.getItem("ROLE");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/konseling" element={<Counseling />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="/rank-board" element={<RankBoard />} />
        <Route path="/live-class" element={<LiveClass />} />
        <Route path="/forum-diskusi" element={<ForumDiskusi />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/auth/masuk" element={<AuthMasuk />} />
        <Route path="/auth/masuk/mardika" element={<AuthMasukMardika />} />
        <Route
          path="/auth/masuk/dewantara-muda"
          element={<AuthMasukDewantaraMuda />}
        />
        <Route path="/auth/masuk/konselor" element={<AuthMasukKonselor />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route
          path="/auth/register/mardika"
          element={<AuthRegisterMardika />}
        />
        <Route
          path="/auth/register/dewantara-muda"
          element={<AuthRegisterDewantaraMuda />}
        />
        <Route
          path="/auth/register/konselor"
          element={<AuthRegisterKonselor />}
        />

        {/* Routes for different dashboard based on user role */}
        {role === "admin" && (
          <Route
            path="/admin/dashboard"
            element={
              isAuthenticated ? (
                <AdminDashboard />
              ) : (
                <NotFound /> // If isAuthenticated is true, show AdminDashboard, else show NotFound
              )
            }
          />
        )}
        {role === "mardika" && (
          <>
            <Route
              path="/mardika/dashboard"
              element={
                isAuthenticated ? (
                  <MardikaDashboard />
                ) : (
                  <NotFound /> // If isAuthenticated is true, show MardikaDashboard, else show NotFound
                )
              }
            />
            <Route
              path="/mardika/classroom"
              element={
                isAuthenticated ? (
                  <MardikaClassroom />
                ) : (
                  <NotFound /> // If isAuthenticated is true, show MardikaDashboard, else show NotFound
                )
              }
            />
            <Route
              path="/mardika/live-class"
              element={
                isAuthenticated ? (
                  <MardikaLiveClass />
                ) : (
                  <NotFound /> // If isAuthenticated is true, show MardikaDashboard, else show NotFound
                )
              }
            />
            <Route
              path="/mardika/konseling"
              element={
                isAuthenticated ? (
                  <MardikaCounseling />
                ) : (
                  <NotFound /> // If isAuthenticated is true, show MardikaDashboard, else show NotFound
                )
              }
            />
            <Route
              path="/mardika/tracking-pembelajaran"
              element={
                isAuthenticated ? (
                  <MardikaLearningTracking />
                ) : (
                  <NotFound /> // If isAuthenticated is true, show MardikaDashboard, else show NotFound
                )
              }
            />
            <Route
              path="/mardika/pengaturan"
              element={
                isAuthenticated ? (
                  <MardikaSettings />
                ) : (
                  <NotFound /> // If isAuthenticated is true, show MardikaDashboard, else show NotFound
                )
              }
            />
            <Route
              path="/mardika/cari-kelompok"
              element={
                isAuthenticated ? (
                  <MardikaFindYourGroup />
                ) : (
                  <NotFound /> // If isAuthenticated is true, show MardikaDashboard, else show NotFound
                )
              }
            />
          </>
        )}
        {role === "dewantara-muda" && (
          <>
            <Route
              path="/dewantara-muda/dashboard"
              element={
                isAuthenticated ? (
                  <DewantaraMudaDashboard />
                ) : (
                  <NotFound /> // If isAuthenticated is true, show DewantaraMudaDashboard, else show NotFound
                )
              }
            />
            <Route
              path="/dewantara-muda/buat-kelompok"
              element={
                isAuthenticated ? (
                  <DewantaraMudaCreateGroup />
                ) : (
                  <NotFound /> // If isAuthenticated is true, show DewantaraMudaDashboard, else show NotFound
                )
              }
            />
            <Route
              path="/dewantara-muda/kelompok"
              element={
                isAuthenticated ? (
                  <DewantaraMudaKelompok />
                ) : (
                  <NotFound /> // If isAuthenticated is true, show DewantaraMudaDashboard, else show NotFound
                )
              }
            />
            <Route
              path="/dewantara-muda/kelompok-update"
              element={
                isAuthenticated ? (
                  <DewantaraMudaKelompokUpdate />
                ) : (
                  <NotFound /> // If isAuthenticated is true, show DewantaraMudaDashboard, else show NotFound
                )
              }
            />
            <Route
              path="/dewantara-muda/kelompok-pengumuman"
              element={
                isAuthenticated ? (
                  <DewantaraMudaKelompokPengumuman />
                ) : (
                  <NotFound /> // If isAuthenticated is true, show DewantaraMudaDashboard, else show NotFound
                )
              }
            />
          </>
        )}

        {role === "konselor" && (
          <>
            <Route
              path="/konselor/dashboard"
              element={
                isAuthenticated ? (
                  <CounselorDashboard />
                ) : (
                  <NotFound /> // If isAuthenticated is true, show CounselorDashboard, else show NotFound
                )
              }
            />
            <Route
              path="/konselor/jadwal-saya"
              element={
                isAuthenticated ? (
                  <CounselorMyDate />
                ) : (
                  <NotFound /> // If isAuthenticated is true, show CounselorDashboard, else show NotFound
                )
              }
            />
          </>
        )}

        {/* Route for Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
