import React from "react";
import ComponentB from "./Component2";

const ComponentA = ({ userData }) => {
  return (
    <div>
      <h2>Component A</h2>
      <ComponentB userData={userData} />
    </div>
  );
};

export default ComponentA;
