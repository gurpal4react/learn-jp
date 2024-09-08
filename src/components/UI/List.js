import React from "react";
import useList from "../hooks/useList";
import { speak } from "../../helper/speak";
import { GiSpeaker } from "react-icons/gi";
import ScrollTopBtn from "./ScrollTopBtn";
import Loader from "./Loader";
import EmptyPage from "./EmptyPage";
import Carousel from "./Carousel";

const ListComponent = ({
  heading,
  dataService,
  level,
  mainKey,
  noShowKeys,
  letter,
  dataValues,
}) => {
  const { data, keys, typedData, loading, index, currentType, handleCarousel } =
    useList(dataService, level, mainKey, noShowKeys, dataValues);
  return loading ? (
    <Loader />
  ) : (
    <div className="list">
      <h1 className="list-heading">{heading}</h1>
      {keys ? (
        typedData ? (
          typedData.map((d, i) => {
            return (
              <React.Fragment key={i}>
                <h2 className="list-heading">{d.type}</h2>
                <List
                  data={d.data}
                  mainKey={mainKey}
                  letter={letter}
                  keys={keys}
                  handleCarousel={handleCarousel}
                />
              </React.Fragment>
            );
          })
        ) : (
          <List
            data={data}
            keys={keys}
            mainKey={mainKey}
            letter={letter}
            handleCarousel={handleCarousel}
          />
        )
      ) : (
        <EmptyPage />
      )}
      <ScrollTopBtn />
      <Carousel
        data={typedData ? typedData : data}
        initialIndex={index}
        initialType={currentType}
        mainKey={mainKey}
      />
    </div>
  );
};

const List = ({ data, keys, mainKey, letter, handleCarousel }) => {
  return data?.map((subData, index) => (
    <div
      key={index}
      className={`${letter ? "letter-" : ""}list-element`}
      onClick={() => handleCarousel(index, subData?.type)}
    >
      <div className={letter ? "" : "list-main"}>
        {subData[mainKey]}
        <GiSpeaker
          size={20}
          onClick={(e) => {
            e.stopPropagation();
            letter ? speak(subData["kana"]) : speak(subData[mainKey]);
          }}
        />
      </div>
      {keys.map((key) => {
        return <div>{subData[key]}</div>;
      })}
    </div>
  ));
};

export default ListComponent;
