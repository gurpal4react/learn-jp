import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";

const Breadcrumb = () => {
  const location = useLocation();
  const [paths, setPaths] = useState({});

  const processPath = (path) => {
    return path
      .split("-")
      ?.map(
        (p) =>
          p.charAt(0).toUpperCase() + p.trimEnd().slice(1).toLocaleLowerCase()
      ).join(' ');
  };

  useEffect(() => {
    const completePath = location.pathname.split("/").filter((d) => d);
    const tempPaths = { Home: "/" };
    completePath?.forEach((path, i) => {
      const tillPath = completePath.slice(0, i + 1);
      const processedPath = processPath(path)
      tempPaths[processedPath] = "/" + tillPath.join("/");
    });
    setPaths(tempPaths);
  }, [location.pathname]);
  return (
    <div>
      {Object.keys(paths)?.map((path, i) => {
        return (
          <span>
            <Link to={paths[path]} className="breadcrumb">
              {path}
            </Link>
            {" > "}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
