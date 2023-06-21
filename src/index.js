import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./TodoList";
import TodoList2 from "./TodoList2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <TodoList /> */}
    <TodoList2 />
  </React.StrictMode>,
);
