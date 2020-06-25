import React, { useState } from "react";
import axios from "axios";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  async function getDoctors(text: string) {
    const { data } = await axios.get(
      "https://testapi.io/api/akirayoglu/0/reference/getDoctors"
    );
    console.log("raw data", data);
    let docsArr = data.filter(
      (doc: Todo) =>
        doc.first_name.toLowerCase().includes(text.toLowerCase()) ||
        doc.last_name.toLowerCase().includes(text.toLowerCase())
    );
    setTodos((prevTodos) => [...prevTodos, ...docsArr]);
  }

  // const todoDeleteHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter((todo) => todo.doctor_id !== todoId);
  //   });
  // };

  async function todoExpandHandler(id: string) {
    const { data } = await axios.get(
      `https://testapi.io/api/akirayoglu/0/tasks/${id}`
    );
    console.log(data);
  }

  return (
    <div className="App">
      <div className="app-container">
        <div className="container p-5">
          <NewTodo getDoctors={getDoctors} />
          <TodoList onExpandTodo={todoExpandHandler} items={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
