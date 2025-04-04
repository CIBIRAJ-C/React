import React, { useContext } from "react";
import AppContext from "./AppContext";

const Component4 = () => {
  const { name, role } = useContext(AppContext); 

  return (
    <div>
      <h2>Component 4</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Role:</strong> {role}</p>
    </div>
  );
};

export default Component4;
