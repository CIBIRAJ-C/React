import React from "react";
import "./App.css";  
import AppContext from "./Context/AppContext";
import Component1 from "./Context/Component1";
import ComponentA from "./PropDrilling/Component1";

const App = () => {
  const userData = { name: "Cibiraj C", role: "Fullstack Developer" };

  return (
    <div className="container">
     
      <div className="component-card use-context">
        <h1>UseContext</h1>
        <AppContext.Provider value={userData}>
          <Component1 />
        </AppContext.Provider>
      </div>

      
      <div className="component-card prop-drilling">
        <h1>Prop Drilling</h1>
        <ComponentA userData={userData} />
      </div>
    </div>
  );
};

export default App;
