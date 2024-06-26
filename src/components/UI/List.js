import React from "react";
import useList from "../hooks/useList";
import { speak } from "../../helper/speak";
import { GiSpeaker } from "react-icons/gi";
import ScrollTopBtn from "./ScrollTopBtn";

const ListComponent = ({ heading, data, mainKey, noShowKeys, letter }) => {
  const { keys, typedData } = useList(
    data,
    mainKey,
    noShowKeys
  );
  return (
    <div className="list">
      <h1 className="list-heading">{heading}</h1>
      {keys ? (
        typedData ? (
          typedData.map((d) => {
            return (
              <>
                <h2 className="list-heading">{d.type}</h2>
                <List
                  data={d.data}
                  mainKey={mainKey}
                  letter={letter}
                  keys={keys}
                />
              </>
            );
          })
        ) : (
          <List data={data} keys={keys} mainKey={mainKey} letter={letter} />
        )
      ) : (
        <></>
      )}
      <ScrollTopBtn />
    </div>
  );
};

const List = ({ data, keys, mainKey, letter }) => {
  return data?.map((subData, index) => (
    <div key={index} className={`${letter ? "letter-" : ""}list-element`}>
      <div className={letter ? "" : "list-main"}>
        {subData[mainKey]}
        <GiSpeaker
          size={20}
          onClick={() =>
            letter ? speak(subData["kana"]) : speak(subData[mainKey])
          }
        />
      </div>
      {keys.map((key) => {
        return <div>{subData[key]}</div>;
      })}
    </div>
  ));
};

export default ListComponent;
