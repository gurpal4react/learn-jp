import React from "react";
import IconBtn from "../components/UI/IconBtn";
import { HomeBtns } from "../data/app/HomeBtns";

const Home = () => {
  return (
    <>
      <h1>Sections</h1>
      <div className="links-list">
        {HomeBtns?.map(({ link, icon, text }) => (
          <IconBtn link={link} icon={icon} text={text} />
        ))}
      </div>
    </>
  );
};

export default Home;
