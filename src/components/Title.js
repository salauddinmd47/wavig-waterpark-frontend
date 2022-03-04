import React from "react";

const Title = ({ heading, subtitle }) => {
  return (
    <div className="mb-5 title">
      <h4>{heading}</h4>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Title;
