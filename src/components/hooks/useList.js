import { useEffect, useState } from "react";

const useList = (dataService, level, mainKey, noShowKeys, dataValues) => {
  const [keys, setKeys] = useState(null);
  const [data, setData] = useState([]);
  const [typedData, setTypedData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if(dataValues){
      setData(dataValues)
      setLoading(false);
      return
    }
    if (!dataService) return;
    const getData = async () => {
      try {
        const data = await dataService(level);
        setData(data.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [dataService, level, dataValues]);

  useEffect(() => {
    if (!data || !data.length) return;
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
    data,
    keys,
    typedData,
    loading,
  };
};

export default useList;
