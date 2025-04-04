import React from "react";

const ComponentD = ({ userData }) => {
  return (
    <div>
      <h2>Component D</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Role:</strong> {userData.role}</p>
    </div>
  );
};

export default ComponentD;
