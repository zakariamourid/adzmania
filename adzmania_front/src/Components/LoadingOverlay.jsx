import React from "react";

const LoadingOverlay = ({ text }) => {
  return (
    <div className="  top-0  right-0 bottom-0 bg-red-900  absolute  ">
      {text}
    </div>
  );
};

export default LoadingOverlay;
