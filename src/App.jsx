import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Sidebar1, { SidebarItem } from "./components/Sidebar1";
import {
  Users, User, Settings, LogOut, LayoutGrid
} from "lucide-react";

import AlertOut from "./components/Alert";

import Homee from "./pages/Homee";
import Login from "./pages/LoginForm";
import Pelajar from "./pages/Pelajar";
import Pengajar from "./pages/Pengajar";
import Pengaturan from "./pages/Pengaturan";


function App() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/home");
  };

  const handleLogout = () => {
    AlertOut(() => {
      setIsAuthenticated(false);
      navigate("/login");
    });
  };


  useEffect(() => {
    if (isAuthenticated) {
      window.history.pushState(null, "", window.location.href);
      window.onpopstate = () => {
        window.history.pushState(null, "", window.location.href);
      };
    }
  }, [isAuthenticated]);

  // Handle responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarExpanded(false);
      } else {
        setSidebarExpanded(true);
      }
    };

    handleResize(); // Check initial screen width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-200 font-sans"> 
          {!isAuthenticated ? (
        <div className="flex items-center justify-center min-h-screen w-full bg-gray-200">
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      ) : (
        <div className="flex w-full h-full">
          <div className={`fixed top-0 left-0 h-full bg-white shadow-lg z-10 ${sidebarExpanded ? 'w-64' : 'w-16'} transition-width duration-300`}>
            <Sidebar1 expanded={sidebarExpanded} setExpanded={setSidebarExpanded}>
              <div className="my-8" />
              <SidebarItem icon={<LayoutGrid size={20} />} text="Beranda" to="/home" />
              <hr className="my-5" />
              <SidebarItem icon={<User size={20} />} text="Pengajar" to="/pengajar" />
              <SidebarItem icon={<Users size={20} />} text="Pelajar" to="/pelajar" />
              <hr className="my-5" />
              <SidebarItem icon={<Settings size={20} />} text="Pengaturan" to="/pengaturan" />
              <SidebarItem icon={<LogOut size={20} />} text="Keluar" onClick={handleLogout} />
            </Sidebar1>
          </div>

         {/* Main content area, adjust margin based on whether RightSidebar is visible */}
          <div
            className={`flex-grow transition-all duration-300 ease-in-out ${
              sidebarExpanded ? "ml-64" : "ml-16"
            } mr-0 p-6 bg-gray-100 overflow-y-auto `}
            style={{ height: "100vh" }}
          >

            <Routes>
              <Route path="/home" element={<Homee/>} />
              <Route path="/pengajar" element={<Pengajar/>} />
              <Route path="/pelajar" element={<Pelajar/>} />
              <Route path="/pengaturan" element={<Pengaturan />} />
            </Routes>
            </div>
        </div>
     )}
    </div>
  );
}

export default App;
