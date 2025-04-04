import React from "react";
import ComponentD from "./Component4";

const ComponentC = ({ userData }) => {
  return (
    <div>
      <h2>Component C</h2>
      <ComponentD userData={userData} />
    </div>
  );
};

export default ComponentC;
