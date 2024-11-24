import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertSimpan } from "../components/Alert";

function Homee() {
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
          <div className="absolute right-48 top-20 bg-blue-400 border border-gray-300 text-white rounded-lg shadow-lg p-4 z-10">
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
        {[...Array(4)].map((_, index) => (
          <a
            key={index}
            className="flex flex-col bg-white border shadow-sm rounded-xl mr-8 hover:shadow-lg focus:outline-none focus:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-400 dark:shadow-neutral-700/70 w-96"
            href="#"
          >
            <img
              className="w-full h-64 rounded-t-xl object-cover"
              src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
              alt="Card Image"
            />
            <div className="p-3 md:p-4 bg-blue-200">
              <h3 className="text-base font-semibold text-black">Card title</h3>
              <p className="mt-1 text-sm text-black">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
        ))}
      </div>

      <h1 className="text-3xl font-semibold mt-6 mb-6 text-primary-500">
        Daftar Tugas
      </h1>
      <div className="p-6 flex flex-row justify-start">
        {[...Array(4)].map((_, index) => (
          <a
            key={index}
            className="flex flex-col bg-white border shadow-sm rounded-xl mr-8 hover:shadow-lg focus:outline-none focus:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-400 dark:shadow-neutral-700/70 w-96"
            href="#"
          >
            <img
              className="w-full h-64 rounded-t-xl object-cover"
              src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
              alt="Card Image"
            />
            <div className="p-3 md:p-4 bg-blue-200">
              <h3 className="text-base font-semibold text-black">Card title</h3>
              <p className="mt-1 text-sm text-black">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Homee;

