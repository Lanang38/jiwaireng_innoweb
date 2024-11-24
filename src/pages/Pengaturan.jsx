import React, { useState } from "react";
import profileImg from '../assets/zee.webp'; 

function Pengaturan() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState({
    name: "Azizi Asadel",
    email: "AziziAsadel@gmail.com",
    profilePicture: profileImg,
  });
  const [newPassword, setNewPassword] = useState("");
  const [newName, setNewName] = useState(profile.name);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setProfile({
      ...profile,
      name: newName, 
    });
    alert("Perubahan disimpan!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg space-y-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600 uppercase">Pengaturan</h1>

        <div className="flex justify-center space-x-8 mb-6">
          <button
            onClick={() => handleTabSwitch("profile")}
            className={`px-6 py-3 text-xl font-semibold uppercase rounded-md transition-all ${
              activeTab === "profile"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
            }`}
          >
            Profil
          </button>
          <button
            onClick={() => handleTabSwitch("settings")}
            className={`px-6 py-3 text-xl font-semibold uppercase rounded-md transition-all ${
              activeTab === "settings"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
            }`}
          >
            Edit Profil
          </button>
        </div>

        {activeTab === "profile" && (
          <div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={profile.profilePicture}
                alt="Profile"
                className="w-96 h-96 rounded-full object-cover border-4 border-blue-500 shadow-lg"
              />
              <div className="text-center space-y-2">
                <h2 className="text-4xl font-semibold text-gray-800">{profile.name}</h2>
                <p className="text-gray-500">{profile.email}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Pengaturan Akun</h3>

            <form onSubmit={handleSaveChanges}>
              <div className="mb-4">
                <label className="block text-gray-700">Ubah Nama</label>
                <input
                  type="text"
                  value={newName}
                  onChange={handleNameChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan nama baru"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Ubah Kata Sandi</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan kata sandi baru"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Notifikasi</label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    defaultChecked
                  />
                  <span className="text-gray-600">Terima pemberitahuan melalui email</span>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                >
                  Simpan Pengaturan
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pengaturan;