import React, { useEffect, useState } from "react";
import { BiHome } from "react-icons/bi";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import ToggleSwitch from "./ToggleSwitch";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialDarkMode = localStorage.getItem("dark-mode") ?? false;
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
    localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="gap-bottom">
      <header className="header">
        <Breadcrumb />
        <div className="toggle-group">
          <span>Dark Mode</span>
          <ToggleSwitch value={darkMode} handleChange={setDarkMode} />
        </div>
      </header>
      <Outlet />
      {location.pathname !== "/" && (
        <BiHome
          className=" home-btn quiz-button"
          size={20}
          onClick={() => navigate("/")}
        />
      )}
    </div>
  );
};

export default Layout;
