import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="gap-bottom">
      <Outlet />
      {location.pathname !== "/" && (
        <Link to={"/"} className="quiz-button">
          home
        </Link>
      )}
    </div>
  );
};

export default Layout;
