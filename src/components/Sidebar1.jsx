import { Menu } from "lucide-react";
import { useContext, createContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarContext = createContext();

export default function Sidebar1({ children, expanded, setExpanded }) {
  const [isMobile, setIsMobile] = useState(false); // State to track if the screen is small
  
  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // For example, use 1024px as the breakpoint for mobile
    };
    
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return (
    <aside
      className="h-screen transition-all duration-500 ease-in-out"
      style={{ width: expanded ? "16rem" : "4rem" }} // 16rem for 64, 4rem for 16
    >
      <nav className="h-full flex flex-col bg-blue-100 border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="src\assets\logo.png"
            className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "w-32" : "w-0"}`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-blue-100 hover:bg-gray-100"
            disabled={isMobile && !expanded} // Disable button when mobile and sidebar is collapsed
          >
            <Menu />
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, to, alert, onClick }) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);

  return (
    <li
      onClick={onClick}
      className={`relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-all duration-100 ease-in-out group
        ${isActive ? "bg-blue-500 text-white" : "text-black-600 hover:bg-blue-50 text-blue-600"}`}
    >
      <Link to={to} className="flex items-center">
        {icon}
        <span className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "w-52 ml-3" : "w-0"}`}>
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-green-400 ${expanded ? "" : "top-2"}`}
          />
        )}
      </Link>

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6
            bg-blue-100 text-blue-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all duration-200 ease-in-out
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
