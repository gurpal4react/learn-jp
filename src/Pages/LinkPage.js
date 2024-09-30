import React from "react";
import IconBtn from "../components/UI/IconBtn";
import ScrollTopBtn from "../components/UI/ScrollTopBtn";
import { Descriptions } from "../data/app/description";

const LinkPage = ({ title, btnObj }) => {
  return (
    <>
      <h1 className="section-header">{title} Sections</h1>
      <p className="section-description">{Descriptions[title] ?? ""}</p>
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
