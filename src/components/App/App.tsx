import "./App.scss";
import React from "react";

// Components
import { Todos } from "../Todos/Todos";

function App() {
  return (
    <div className="app">
      <Todos />
    </div>
  );
}

export { App };
