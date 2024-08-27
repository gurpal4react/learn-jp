import React from "react";
import IconBtn from "../components/UI/IconBtn";
import ScrollTopBtn from "../components/UI/ScrollTopBtn";

const LinkPage = ({ btnObj }) => {
  return (
    <>
      <h1>Sections</h1>
      <div className="links-list">
        {btnObj?.map(({ link, icon, text }) => (
          <div>
            <IconBtn link={link} icon={icon} text={text} />
          </div>
        ))}
      </div>
      <ScrollTopBtn />
    </>
  );
};

export default LinkPage;
