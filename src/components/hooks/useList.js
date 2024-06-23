import { useEffect, useState } from "react";

const useList = (data, mainKey, noShowKeys) => {
  const [keys, setKeys] = useState(null);
  const [typedData, setTypedData] = useState(null);
  
  useEffect(() => {
    setKeys(
      Object.keys(data[0]).filter(
        (key) =>
          key !== mainKey &&
          !(Array.isArray(noShowKeys) && noShowKeys.indexOf(key) !== -1)
      )
    );
    if (Object.keys(data[0]).indexOf("type") !== -1) {
      const hash = data.reduce(
        // eslint-disable-next-line 
        (p, c) => (p[c.type] ? p[c.type].push(c) : (p[c.type] = [c]), p),
        {}
      );
      setTypedData(Object.keys(hash).map((k) => ({ type: k, data: hash[k] })));
    }
  }, [data, mainKey, noShowKeys]);

  return {
    keys,
    typedData
  };
};

export default useList;
