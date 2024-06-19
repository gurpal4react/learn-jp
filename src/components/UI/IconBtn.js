import React from "react";
import { Link } from "react-router-dom";

const IconBtn = ({ link, icon, text }) => {
  return (
    <Link to={link}>
      <button className="icon-btn">
        <div className="icon">{icon}</div>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </button>
    </Link>
  );
};

export default IconBtn;
