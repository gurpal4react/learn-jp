import React from "react";
import { BiUpArrow } from "react-icons/bi";
import useScrollTopBtn from "../hooks/useScrollTopBtn";

const ScrollTopBtn = () => {
  const { top, scrollToTop } = useScrollTopBtn();
  return (
    !top && (
      <BiUpArrow
        className="top-btn quiz-button"
        onClick={scrollToTop}
        size={20}
      />
    )
  );
};

export default ScrollTopBtn;
