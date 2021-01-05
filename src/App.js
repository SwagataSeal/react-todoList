import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoInput /> 
    </div>
  );
}

export default App;
