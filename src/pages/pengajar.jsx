import React, { useState } from "react";
import NavbarPengajar from "../components/NavbarPengajar";

function Pengajar() {
  const [activePage, setActivePage] = useState("Forum");

  const cardTugas = [
    {
      kelas: "Fotografi",
      tugas: "Mengambil foto bertema alam",
      deadline: "2024-11-30",
    },
    {
      kelas: "Fotografi",
      tugas: "Edit foto menggunakan Adobe Lightroom",
      deadline: "2024-12-05",
    },
    {
      kelas: "Pemrograman",
      tugas: "Membuat aplikasi To-Do List sederhana",
      deadline: "2024-11-28",
    },
    {
      kelas: "Pemrograman",
      tugas: "Memahami konsep dasar API dan implementasi",
      deadline: "2024-12-03",
    },
  ];

  const cardNilai = [
    {
      kelas: "Fotografi",
      tugas: "Mengambil foto bertema alam",
      nilai: [
        { siswa: "Budi Santoso", nilai: 80, persen: 80 },
        { siswa: "Siti Rahmawati", nilai: 90, persen: 90 }
      ],
    },
    {
      kelas: "Fotografi",
      tugas: "Edit foto menggunakan Adobe Lightroom",
      nilai: [
        { siswa: "Budi Santoso", nilai: 85, persen: 85 },
        { siswa: "Siti Rahmawati", nilai: 92, persen: 92 }
      ],
    },
    {
      kelas: "Pemrograman",
      tugas: "Membuat aplikasi To-DO List sederhana",
      nilai: [
        { siswa: "Andi", nilai: 78, persen: 78 },
        { siswa: "Dewi", nilai: 88, persen: 88 }
      ],
    },
      {
        kelas: "Pemrograman",
        tugas: "Memahami konsep dasar API dan implementasi",
        nilai: [
          { siswa: "Andi", nilai: 82, persen: 82 },
          { siswa: "Dewi", nilai: 95, persen: 95 }
        ],
      },
  ];

  const cardQuiz = [
    {
      kelas: "Fotografi",
      quiz: "Pengantar Fotografi",
      tanggal: "15 Nov 2024",
      peserta: "5/10",
      deskripsi: "Quiz ini menguji pengetahuan dasar tentang fotografi dan komposisi.",
    },
    {
      kelas: "Fotografi",
      quiz: "Teknik Pencahayaan",
      tanggal: "22 Nov 2024",
      peserta: "3/10",
      deskripsi: "Quiz ini menguji pengetahuan tentang teknik pencahayaan dalam fotografi.",
    },
    {
      kelas: "Fotografi",
      quiz: "Komposisi dalam Fotografi",
      tanggal: "29 Nov 2024",
      peserta: "7/10",
      deskripsi: "Quiz ini menguji pengetahuan siswa tentang komposisi dalam fotografi.",
    },
    {
      kelas: "Pemrograman",
      quiz: "Pengenalan JavaScript",
      tanggal: "18 Nov 2024",
      peserta: "4/8",
      deskripsi: "Quiz ini menguji dasar-dasar JavaScript dalam pemrograman.",
    },
    {
      kelas: "Pemrograman",
      quiz: "Pengenalan ReactJS",
      tanggal: "25 Nov 2024",
      peserta: "6/8",
      deskripsi: "Quiz ini menguji pemahaman dasar tentang ReactJS.",
    },
  ];  
  

  return (
    <div>
        <NavbarPengajar activePage={activePage} setActivePage={setActivePage} />
        <div className="w-full px-6 mt-8">
        {activePage === "Forum" && (
            <div className="space-y-8">
              {/* Card untuk Fotografi */}
              <div className="bg-white shadow-2xl rounded-xl px-8 py-8">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h1 className="text-4xl font-extrabold text-gray-800 uppercase">Informatika 07</h1>
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
                    <span className="font-semibold">Informatika 07</span>. Diskusikan ide, berbagi karya, dan bertanya seputar dunia fotografi. Jangan lupa untuk tetap menjaga etika dan menghormati pendapat orang lain.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="p-5 bg-gray-50 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold text-gray-800">Komentar oleh Budi</h4>
                    <p className="text-gray-600 mt-2">
                      Materi tentang teknik pencahayaan sangat membantu saya memahami dasar-dasar fotografi. Terima kasih!
                    </p>
                  </div>
                  <div className="p-5 bg-gray-50 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold text-gray-800">Komentar oleh Siti</h4>
                    <p className="text-gray-600 mt-2">
                      Saya menemukan kesulitan dalam memahami aperture, apakah ada yang bisa membantu memberikan penjelasan lebih lanjut?
                    </p>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105">
                      Lihat Selengkapnya!
                    </button>
                  </div>
                </div>
              </div>

              {/* Card untuk Pemrograman */}
              <div className="bg-white shadow-2xl rounded-xl px-8 py-8">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h1 className="text-4xl font-extrabold text-gray-800 uppercase">Informatika 07</h1>
                    <h2 className="text-2xl font-semibold text-gray-600 pt-2">Pemrograman</h2>
                    <h3 className="text-xl text-green-500 pt-2">Kode Kelas: P9017AB</h3>
                  </div>
                  <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
                    Aktif
                  </span>
                </div>
                <hr className="border-gray-300 my-6" />
                <div className="mb-6">
                  <p className="text-lg text-gray-700">
                    Selamat datang di forum <span className="font-semibold">Pemrograman</span> kelas{" "}
                    <span className="font-semibold">Informatika 07</span>. Diskusikan solusi, berbagi pengalaman, dan bertanya seputar dunia pemrograman. Jangan lupa untuk tetap menjaga etika dan menghormati pendapat orang lain.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="p-5 bg-gray-50 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold text-gray-800">Komentar oleh Andi</h4>
                    <p className="text-gray-600 mt-2">
                      Latihan membuat aplikasi To-Do List sangat membantu saya memahami konsep dasar ReactJS. Terima kasih!
                    </p>
                  </div>
                  <div className="p-5 bg-gray-50 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold text-gray-800">Komentar oleh Dewi</h4>
                    <p className="text-gray-600 mt-2">
                      Saya merasa kesulitan dalam memahami cara kerja API. Ada yang bisa memberikan contoh yang lebih sederhana?
                    </p>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105">
                      Lihat Selengkapnya!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}


          {activePage === "Tugas" && (
            <div className="space-y-8">
              {/* Card Tugas Fotografi */}
              <div className="bg-white shadow-2xl rounded-xl px-8 py-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Tugas Fotografi</h2>
                <div className="space-y-6">
                  {cardTugas
                    .filter((tugas) => tugas.kelas === "Fotografi")
                    .map((tugas, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800">{tugas.tugas}</h3>
                        <p className="text-gray-700 mb-4">
                          {`Deskripsi tugas: ${tugas.deskripsi || "Silakan baca panduan tugas ini pada sistem kelas."}`}
                        </p>
                        <div className="mb-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-semibold text-gray-700">Progress: 30%</span>
                            <span className="text-sm font-semibold text-gray-600">Deadline: {tugas.deadline}</span>
                          </div>
                          <div className="w-full bg-gray-300 rounded-full h-2.5">
                            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Card Tugas Pemrograman */}
              <div className="bg-white shadow-2xl rounded-xl px-8 py-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-purple-600">Tugas Pemrograman</h2>
                <div className="space-y-6">
                  {cardTugas
                    .filter((tugas) => tugas.kelas === "Pemrograman")
                    .map((tugas, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800">{tugas.tugas}</h3>
                        <p className="text-gray-700 mb-4">
                          {`Deskripsi tugas: ${tugas.deskripsi || "Silakan baca panduan tugas ini pada sistem kelas."}`}
                        </p>
                        <div className="mb-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-semibold text-gray-700">Progress: 50%</span>
                            <span className="text-sm font-semibold text-gray-600">Deadline: {tugas.deadline}</span>
                          </div>
                          <div className="w-full bg-gray-300 rounded-full h-2.5">
                            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}


          {activePage === "Nilai" && (
            <div className="space-y-8">
              {/* Card Nilai Tugas Fotografi */}
              <div className="bg-white shadow-2xl rounded-xl px-8 py-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Nilai Tugas Fotografi</h2>
                <div className="space-y-6">
                  {cardNilai
                    .filter((tugas) => tugas.kelas === "Fotografi")
                    .map((tugas, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{tugas.tugas}</h3>
                        <p className="text-gray-700 mb-4">
                          {`Berikut adalah nilai-nilai yang diperoleh siswa dalam tugas mengenai ${tugas.tugas.toLowerCase()}.`}
                        </p>
                        <div className="space-y-4">
                          {/* Daftar Nilai Siswa */}
                          {tugas.nilai.map((nilai, idx) => (
                            <div key={idx} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                              <span className="font-semibold text-gray-800">{nilai.siswa}</span>
                              <div className="flex items-center">
                                <span className="text-sm font-semibold text-gray-700 mr-2">{nilai.nilai}/100</span>
                                <span className="text-sm font-semibold text-gray-600">{nilai.persen}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Card Nilai Tugas Pemrograman */}
              <div className="bg-white shadow-2xl rounded-xl px-8 py-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-purple-600">Nilai Tugas Pemrograman</h2>
                <div className="space-y-6">
                  {cardNilai
                    .filter((tugas) => tugas.kelas === "Pemrograman")
                    .map((tugas, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{tugas.tugas}</h3>
                        <p className="text-gray-700 mb-4">
                          {`Berikut adalah nilai-nilai yang diperoleh siswa dalam tugas mengenai ${tugas.tugas.toLowerCase()}.`}
                        </p>
                        <div className="space-y-4">
                          {/* Daftar Nilai Siswa */}
                          {tugas.nilai.map((nilai, idx) => (
                            <div key={idx} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                              <span className="font-semibold text-gray-800">{nilai.siswa}</span>
                              <div className="flex items-center">
                                <span className="text-sm font-semibold text-gray-700 mr-2">{nilai.nilai}/100</span>
                                <span className="text-sm font-semibold text-gray-600">{nilai.persen}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
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
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Quiz Fotografi</h3>
                {cardQuiz
                  .filter((quiz) => quiz.kelas === "Fotografi")
                  .map((quiz, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 shadow-lg">
                      <h3 className="text-xl font-semibold text-blue-800 mb-4">{quiz.quiz}</h3>
                      <p className="text-gray-700 mb-4">{quiz.deskripsi}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-700">Dibuat pada: {quiz.tanggal}</span>
                        <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                          {quiz.peserta}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Quiz Pemrograman</h3>
                {cardQuiz
                  .filter((quiz) => quiz.kelas === "Pemrograman") 
                  .map((quiz, index) => (
                    <div key={index} className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 shadow-lg">
                      <h3 className="text-xl font-semibold text-green-800 mb-4">{quiz.quiz}</h3>
                      <p className="text-gray-700 mb-4">{quiz.deskripsi}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-700">Dibuat pada: {quiz.tanggal}</span>
                        <span className="bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full">
                          {quiz.peserta}
                        </span>
                      </div>
                    </div>
                  ))}
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
