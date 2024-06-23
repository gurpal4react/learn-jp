import React from "react";
import { BiHome } from "react-icons/bi";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="gap-bottom">
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
