import React from "react";
import Application from "./component/application/Application";
import Skill from "./component/skills/Skill";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Application /> */}
      <Skill skills={["HTML", "CSS"]} />
    </div>
  );
}

export default App;
