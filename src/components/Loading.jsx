import React from "react";
import "./Loading.css";
import LoaderIcon from "../images/sunny-light.svg";

const Loading = ({loading}) => {
  return (
    <div className={`loading ${!loading ? 'loading-hidden' : ''}`}>
      <div className="loading_container">
        <img src={LoaderIcon} />
      </div>
    </div>
  );
};

export default Loading;
