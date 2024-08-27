import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useBreadcrumb = () => {
  const location = useLocation();
  const [paths, setPaths] = useState({});

  const processPath = (path) => {
    return path
      .split("-")
      ?.map(
        (p) =>
          p.charAt(0).toUpperCase() + p.trimEnd().slice(1).toLocaleLowerCase()
      )
      .join(" ");
  };

  useEffect(() => {
    const completePath = location.pathname.split("/").filter((d) => d);
    const tempPaths = { Home: "/" };
    completePath?.forEach((path, i) => {
      const tillPath = completePath.slice(0, i + 1);
      const processedPath = processPath(path);
      tempPaths[processedPath] = "/" + tillPath.join("/");
    });
    setPaths(tempPaths);
  }, [location.pathname]);
  return {paths}
};

export default useBreadcrumb;
