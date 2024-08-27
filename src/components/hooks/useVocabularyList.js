import { useEffect, useRef, useState } from "react";
import listService from "../../Services/list";

const useVocabularyList = (level) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const chapterRef = useRef([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await listService.getVocabulary(level);
        setData(data.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [level]);
  return { data, loading, chapterRef };
};

export default useVocabularyList;
