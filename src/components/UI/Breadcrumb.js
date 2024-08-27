import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumb from "../hooks/useBreadcrumb";

const Breadcrumb = () => {
  const {paths} = useBreadcrumb()
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
