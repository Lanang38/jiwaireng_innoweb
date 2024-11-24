import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertSimpan } from "../components/Alert";
import Fotografi from '../assets/fotografi.jpg';
import Pemrograman from '../assets/pemrograman.jpg';

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openForm = (type) => {
    setFormType(type);
    setIsOpen(false);
  };

  const closeForm = () => {
    setFormType(null);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Mencegah refresh halaman
    console.log("Form submitted");
    AlertSimpan("Form berhasil dikirim!", "success");

    closeForm();
  };

  const cardKelas = [
  {
    title: "Fotografi",
    description: "Kelas Fotografi Informatika 07",
    image: Fotografi,
  },
  {
    title: "Pemrograman",
    description: "Kelas Pemrograman Informatika 07",
    image: Pemrograman,
  },
];

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

  return (
    <div>
      <div className="flex items-center justify-end ">
        <button
          type="button"
          onClick={toggleMenu}
          className="flex items-center justify-center w-20 h-20 mr-4 bg-blue-400 rounded-full text-white font-bold text-3xl hover:bg-blue-500"
        >
          +
        </button>
        {isOpen && (
          <div className="absolute right-24 top-20 bg-blue-400 border border-gray-300 text-white rounded-lg shadow-lg p-4 z-10">
            <ul className="flex flex-col gap-2">
              <li>
                <button
                  onClick={() => openForm("Tambah Kelas")}
                  className="px-4 py-2 text-primary-50 font-semibold hover:bg-gray-100 hover:text-blue-400 rounded-md w-full text-left"
                >
                  Tambah Kelas
                </button>
              </li>
              <li>
                <button
                  onClick={() => openForm("Masuk Kelas")}
                  className="px-4 py-2 text-primary-50 font-semibold hover:bg-gray-100 hover:text-blue-400 rounded-md w-full text-left"
                >
                  Masuk Kelas
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Form */}
      {formType && (
        <div className="fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-60 z-20">
          <div className="bg-blue-500 p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl text-white font-bold mb-4">{formType}</h2>
            <form onSubmit={handleFormSubmit}>
              {formType === "Tambah Kelas" && (
                <>
                  <label className="block mb-2 font-medium text-primary-50">
                    Nama Kelas
                  </label>
                  <input
                    type="text"
                    className="w-full border border-black-300 rounded-lg p-2 mb-4 text-black"
                  />
                  <label className="block mb-2 font-medium text-primary-50">
                    Nama Pelajaran
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-black"
                  />
                  <label className="block mb-2 font-medium text-primary-50">
                    Nama Pengajar
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-black"
                  />
                </>
              )}
              {formType === "Masuk Kelas" && (
                <>
                  <label className="block mb-2 font-medium text-primary-50">
                    Kode Kelas
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-black"
                  />
                </>
              )}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg mr-2 transition-all duration-300 ease-in-out hover:bg-primary-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-primary-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <h1 className="text-3xl font-semibold mb-6 text-primary-500">
        Daftar Kelas
      </h1>
      <div className="p-6 flex flex-row justify-start">
        {cardKelas.map((card, index) => (
          <a
            key={index}
            className="flex flex-col bg-white border shadow-sm rounded-xl mr-8 hover:shadow-lg focus:outline-none focus:shadow-lg transition w-96"
            href="#"
          >
            <img
              className="w-full h-64 rounded-t-xl object-cover"
              src={card.image}
              alt={'Image of ${card.title}'}
            />
            <div className="p-3 md:p-4 bg-blue-200">
              <h3 className="text-base font-semibold text-black uppercase">{card.title}</h3>
              <p className="mt-1 text-sm text-black">
                {card.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      <h1 className="text-3xl font-semibold mt-6 mb-6 text-primary-500">
        Daftar Tugas
      </h1>
      <div className="p-6 flex flex-row justify-start">
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {cardKelas.map((kelas) => (
          <div
            key={kelas.title}
            className="bg-blue-200 border shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center">
              <img
                src={kelas.image}
                alt={kelas.title}
                className="w-full h-40 rounded-t-xl object-cover"
              />
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold text-black dark:text-white">{kelas.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{kelas.description}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {cardTugas
                .filter((tugas) => tugas.kelas === kelas.title)
                .map((tugas, index) => (
                  <li
                    key={index}
                    className="text-sm text-black dark:text-gray-300 p-2 bg-blue-50 rounded-md dark:bg-blue-900/20"
                  >
                    <span className="font-semibold">• {tugas.tugas}</span>
                    <br />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Deadline: {tugas.deadline}</span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Home;
