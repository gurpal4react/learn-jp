import React from "react";
import useCarousel from "../hooks/useCarousel";
import { GiSpeaker } from "react-icons/gi";
import { speak } from "../../helper/speak";

const Carousel = ({ data, initialIndex, initialType, mainKey }) => {
  const {
    visibleData,
    handlePrev,
    handleNext,
    handleClose,
    handleTouchStart,
    handleTouchEnd,
  } = useCarousel(data, initialIndex, initialType);
  console.log({a:visibleData?'yes':'no'})
  return visibleData ? (
    <div className="modal-backdrop">
      <div className="modal-container">
        <div
          className="modal-body"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <GiSpeaker
            size={20}
            onClick={(e) => {
              mainKey === "kana"
                ? speak(visibleData["kana"])
                : speak(visibleData["jp"]);
            }}
          />
          {Object.keys(visibleData)?.map((key) => {
            return visibleData[key] ? (
              <div
                className={`carousel-key${
                  key === mainKey ? " carousel-main-key" : ""
                }`}
                key={key}
              >
                {key !== mainKey
                  ? key + " : " + visibleData[key]
                  : visibleData[key]}
              </div>
            ) : (
              <></>
            );
          })}
        </div>
        <div className="modal-footer">
          <button className="quiz-button" onClick={handlePrev}>
            Prev
          </button>
          <button className="quiz-button" onClick={handleClose}>
            Close
          </button>
          <button className="quiz-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Carousel;
