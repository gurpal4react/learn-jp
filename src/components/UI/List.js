import React from "react";
import useList from "../hooks/useList";

const ListComponent = ({ heading, data, mainKey, noShowKeys, letter }) => {
  const { keys, typedData } = useList(data, mainKey, noShowKeys);
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
    </div>
  );
};

const List = ({ data, keys, mainKey, letter }) => {
  return data?.map((subData, index) => (
    <div key={index} className={`${letter ? "letter-" : ""}list-element`}>
      <div className="list-main">{subData[mainKey]}</div>
      {keys.map((key) => {
        return <div>{subData[key]}</div>;
      })}
    </div>
  ));
};

export default ListComponent;
