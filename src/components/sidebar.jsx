import { useLocation, useNavigate } from "react-router-dom";
import { Home, User, Book } from "lucide-react";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const Menus = [
    { title: "Beranda", icon: <Home size={32} />, path: "/" },
    { title: "Pengajar", icon: <User size={32} />, path: "/pengajar" },
    { title: "Pelajar", icon: <Book size={32} />, path: "/pelajar" },
  ];

  const handleNavigation = (path) => {
    if (path) navigate(path);
  };

  return (
    <div className="flex">
      <div className="w-80 bg-blue-200 text-white h-screen p-0 shadow-lg">
        <div className="flex items-center gap-x-4 p-5">
          <img src={logo} className="cursor-pointer" alt="Logo" />
        </div>

        <ul className="pt-5">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex items-center w-full p-3 pl-8 text-2xl font-bold cursor-pointer gap-x-4 transition-all duration-300
              ${
                location.pathname === Menu.path
                  ? "bg-primary-800 text-primary-50"
                  : "text-primary-600 hover:bg-primary-800 hover:text-primary-50"
              }`}
              onClick={() => handleNavigation(Menu.path)}
            >
              <span>{Menu.icon}</span>
              <span>{Menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;