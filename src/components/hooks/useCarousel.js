import { useEffect, useState } from "react";

const useCarousel = (data, initialIndex, setInitialIndex, initialType) => {
  const [totalLength, setTotalLength] = useState();
  const [typeList, setTypeList] = useState();
  const [currentType, setCurrentType] = useState();
  const [index, setIndex] = useState();
  const [visibleData, setVisibleData] = useState();
  const [startX, setStartX] = useState(undefined);
  const handlePrev = () => {
    if (index >= 1) {
      setIndex((prev) => prev - 1);
      if (currentType) {
        setVisibleData(
          data.filter((d) => d.type === currentType)[0].data[index - 1]
        );
      } else {
        setVisibleData(data[index - 1]);
      }
    } else if (typeList && typeList.indexOf(currentType) !== 0) {
      const newCurrentTypeIndex = typeList.indexOf(currentType) - 1;
      const newType = typeList[newCurrentTypeIndex];
      const typeFilteredData = data.filter((d) => d.type === newType)[0].data;
      const newLength = typeFilteredData.length;
      setCurrentType(newType);
      setTotalLength(newLength);
      setIndex(newLength - 1);
      setVisibleData(typeFilteredData[newLength - 1]);
    }
  };

  const handleNext = () => {
    if (index <= totalLength - 2) {
      setIndex((prev) => prev + 1);
      if (currentType) {
        setVisibleData(
          data.filter((d) => d.type === currentType)[0].data[index + 1]
        );
      } else {
        setVisibleData(data[index + 1]);
      }
    } else if (
      typeList &&
      typeList.indexOf(currentType) !== typeList.length - 1
    ) {
      const newCurrentTypeIndex = typeList.indexOf(currentType) + 1;
      const newType = typeList[newCurrentTypeIndex];
      const typeFilteredData = data.filter((d) => d.type === newType)[0].data;
      setCurrentType(newType);
      setTotalLength(typeFilteredData.length);
      setIndex(0);
      setVisibleData(typeFilteredData[0]);
    }
  };

  const handleClose = () => {
    setIndex(null);
    setCurrentType(null);
    setTypeList(null);
    setTotalLength(null);
    setVisibleData(null);
    setInitialIndex(null)
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;

    // Determine swipe direction based on the difference
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setStartX(undefined);
  };

  useEffect(() => {
    if (!data || !data.length) return;
    if (typeof initialIndex === "number") {
      setIndex(initialIndex);
      if (initialType) {
        setCurrentType(initialType);
        setTypeList(data?.map((d) => d.type));
        const typeFilteredData = data.filter((d) => d.type === initialType)[0]
          .data;
        setTotalLength(typeFilteredData.length);
        setVisibleData(typeFilteredData[initialIndex]);
      } else {
        setTotalLength(data.length);
        setVisibleData(data[initialIndex]);
      }
    }
  }, [data, initialIndex, initialType]);

  return {
    visibleData,
    handlePrev,
    handleNext,
    handleClose,
    handleTouchStart,
    handleTouchEnd,
  };
};

export default useCarousel;
