import React, { useState } from "react";
import NavbarPengajar from "../components/NavbarPengajar";

function Pengajar() {
  const [activePage, setActivePage] = useState("Forum");

  return (
    <div>
        <NavbarPengajar activePage={activePage} setActivePage={setActivePage} />
        <div className="w-full px-6 mt-8">
          {activePage === "Forum" && (
            <div className="bg-white shadow-2xl rounded-xl px-8 py-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-4xl font-extrabold text-gray-800">Informatika 07</h1>
                  <h2 className="text-2xl font-semibold text-gray-600 pt-2">Fotografi</h2>
                  <h3 className="text-xl text-green-500 pt-2">Kode Kelas: A8902LE</h3>
                </div>
                <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
                  Aktif
                </span>
              </div>
              <hr className="border-gray-300 my-6" />
              <div className="mb-6">
                <p className="text-lg text-gray-700">
                  Selamat datang di forum <span className="font-semibold">Fotografi</span> kelas{" "}
                  <span className="font-semibold">Informatika 07</span>. Diskusikan ide, berbagi
                  karya, dan bertanya seputar dunia fotografi. Jangan lupa untuk tetap menjaga etika
                  dan menghormati pendapat orang lain.
                </p>
              </div>
              <div className="space-y-6">
                <div className="p-5 bg-gray-50 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800">Komentar oleh Budi</h4>
                  <p className="text-gray-600 mt-2">
                    Materi tentang teknik pencahayaan sangat membantu saya memahami dasar-dasar
                    fotografi. Terima kasih!
                  </p>
                </div>
                <div className="p-5 bg-gray-50 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800">Komentar oleh Siti</h4>
                  <p className="text-gray-600 mt-2">
                    Saya menemukan kesulitan dalam memahami aperture, apakah ada yang bisa membantu
                    memberikan penjelasan lebih lanjut?
                  </p>
                </div>
                <div className="mt-6 flex justify-center">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105">
                    Lihat Selengkapnya!
                  </button>
                </div>
              </div>
            </div>
          )}

          {activePage === "Tugas" && (
            <div className="bg-white shadow-2xl rounded-xl px-8 py-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Tugas Fotografi</h2>

              <div className="bg-gray-50 rounded-lg p-6 mb-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Tugas 1: Fotografi Dasar</h3>
                <p className="text-gray-700 mb-4">Deskripsi singkat tentang tugas ini dan apa yang diharapkan dari siswa, termasuk teknik dasar dalam fotografi.</p>
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">3/10 Terkumpul</span>
                    <span className="text-sm font-semibold text-gray-600">30%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Tugas 2: Teknik Pencahayaan</h3>
                <p className="text-gray-700 mb-4">Deskripsi tugas ini dan panduan untuk mengumpulkan materi tentang pencahayaan untuk fotografi yang baik.</p>
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">3/15 Terkumpul</span>
                    <span className="text-sm font-semibold text-gray-600">20%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2.5">
                    <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Tugas 3: Komposisi dalam Fotografi</h3>
                <p className="text-gray-700 mb-4">Panduan tentang komposisi fotografi dan tugas yang diberikan kepada siswa untuk meningkatkan hasil foto mereka.</p>
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">3/12 Terkumpul</span>
                    <span className="text-sm font-semibold text-gray-600">25%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activePage === "Nilai" && (
            <div className="bg-white shadow-2xl rounded-xl px-8 py-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Nilai Tugas Fotografi</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Tugas 1: Fotografi Dasar</h3>
                <p className="text-gray-700 mb-4">Berikut adalah nilai-nilai yang diperoleh siswa dalam tugas mengenai teknik dasar fotografi.</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800">Budi Santoso</span>
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-gray-700 mr-2">80/100</span>
                      <span className="text-sm font-semibold text-gray-600">80%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800">Siti Rahmawati</span>
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-gray-700 mr-2">90/100</span>
                      <span className="text-sm font-semibold text-gray-600">90%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Tugas 2: Teknik Pencahayaan</h3>
                <p className="text-gray-700 mb-4">Berikut adalah nilai-nilai yang diperoleh siswa dalam tugas mengenai teknik pencahayaan.</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800">Budi Santoso</span>
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-gray-700 mr-2">85/100</span>
                      <span className="text-sm font-semibold text-gray-600">85%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800">Siti Rahmawati</span>
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-gray-700 mr-2">92/100</span>
                      <span className="text-sm font-semibold text-gray-600">92%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Tugas 3: Komposisi dalam Fotografi</h3>
                <p className="text-gray-700 mb-4">Berikut adalah nilai-nilai yang diperoleh siswa dalam tugas mengenai komposisi fotografi.</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800">Budi Santoso</span>
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-gray-700 mr-2">88/100</span>
                      <span className="text-sm font-semibold text-gray-600">88%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800">Siti Rahmawati</span>
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-gray-700 mr-2">95/100</span>
                      <span className="text-sm font-semibold text-gray-600">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        {activePage === "Quiz" && (
            <div className="bg-white shadow-2xl rounded-xl px-8 py-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Quiz Pengajar</h2>
                <p className="text-gray-700 mb-8 text-center">
                Berikut adalah daftar quiz yang telah Anda buat. Anda bisa membuat quiz baru menggunakan tombol di bawah.
                </p>
                <div className="space-y-6 mb-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Quiz 1: Pengantar Fotografi</h3>
                    <p className="text-gray-700 mb-4">Quiz ini menguji pengetahuan dasar tentang fotografi dan komposisi.</p>
                    <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">Dibuat pada: 15 Nov 2024</span>
                    <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">5/10</span>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Quiz 2: Teknik Pencahayaan</h3>
                    <p className="text-gray-700 mb-4">Quiz ini menguji pengetahuan tentang teknik pencahayaan dalam fotografi.</p>
                    <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">Dibuat pada: 22 Nov 2024</span>
                    <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">3/10</span>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Quiz 3: Komposisi dalam Fotografi</h3>
                    <p className="text-gray-700 mb-4">Quiz ini menguji pengetahuan siswa tentang komposisi dalam fotografi.</p>
                    <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">Dibuat pada: 29 Nov 2024</span>
                    <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">7/10</span>
                    </div>
                </div>
                </div>

                <div className="flex justify-center mt-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
                    Buat Quiz Baru
                </button>
                </div>
            </div>
        )}

        </div>
      </div>
  );
}

export default Pengajar;
