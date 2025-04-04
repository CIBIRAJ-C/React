import React from "react";
import ComponentC from "./Component3";

const ComponentB = ({ userData }) => {
  return (
    <div>
      <h2>Component B</h2>
      <ComponentC userData={userData} />
    </div>
  );
};

export default ComponentB;
