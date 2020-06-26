import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo, Task } from "./todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [doctors, setDoctors] = useState<Todo[]>([]);
  let [count, setCount] = useState(0);

  // Prevents infinite API calls
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://testapi.io/api/akirayoglu/0/reference/getDoctors"
      );
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function getDoctors(text: string) {
    let docsArr = todos.filter(
      (doc: Todo) =>
        doc.first_name.toLowerCase().includes(text.toLowerCase()) ||
        doc.last_name.toLowerCase().includes(text.toLowerCase())
    );

    setDoctors([...new Set(doctors.concat(docsArr))]);
  }

  // const todoDeleteHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter((todo) => todo.doctor_id !== todoId);
  //   });
  // };

  // const countHandler = () => {
  //   setCount(count++)
  //   console.log(count)
  // }

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
          <TodoList onExpandTodo={todoExpandHandler} items={doctors} />
        </div>
      </div>
    </div>
  );
}

export default App;
