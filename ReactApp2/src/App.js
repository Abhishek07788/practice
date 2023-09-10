import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1 style={{ background: "teal", color: "#ffff", padding: "10px" }}>
        Counter
      </h1>
      <Counter />
    </div>
  );
}

export default App;
