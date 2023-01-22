import React from "react";
import "./App.css";
import {Todo} from "./components/Todo";

const items = [
  {
    id: "1",
    content: "buy some milk",
    completed: false
  },
  {
    id: "2",
    content: "learn react",
    completed: true
  },
  {
    id: "3",
    content: "clean the house",
    completed: false
  }
]

function App() {
  return <div className="App">
    <Todo items={items} />
  </div>;
}

export default App;
