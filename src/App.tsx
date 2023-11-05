import React from "react"
import Application from "./component/application/Application"
import Skill from "./component/skills/Skill"
import Counter from "./component/counter"
import MuiMode from "./component/muiMode/MuiMode"
import AppProvider from "./component/provider/AppProvider"

function App() {
  return (
    <AppProvider>
      <MuiMode />
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Application />
        <Counter />
        <Skill skills={["HTML", "CSS"]} />
      </div>
    </AppProvider>
  )
}

export default App
