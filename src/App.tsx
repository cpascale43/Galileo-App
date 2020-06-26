import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import DoctorList from "./components/DoctorList";
import NewDoctor from "./components/NewDoctor";
import { Doctor, Task } from "./doctor.model";

function App() {
  const [doctorData, setDoctorData] = useState<Doctor[]>([]);
  const [taskData, setTaskData] = useState<Task[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  // Prevents infinite API calls
  const fetchData = useCallback(async () => {
    try {
      let docs = await axios.get(
        "https://testapi.io/api/akirayoglu/0/reference/getDoctors"
      );
      let tasks = await axios.get(
        `https://testapi.io/api/akirayoglu/0/tasks/getTasks`
      );
      setDoctorData(docs.data);
      setTaskData(tasks.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function getDoctors(text: string) {
    let docsArr = doctorData.filter(
      (doc: Doctor) =>
        doc.first_name.toLowerCase().includes(text.toLowerCase()) ||
        doc.last_name.toLowerCase().includes(text.toLowerCase())
    );

    setDoctors([...new Set(doctors.concat(docsArr))]);
  }

  // const todoDeleteHandler = (todoId: string) => {
  //   setDoctorData((prevTodos) => {
  //     return prevTodos.filter((todo) => todo.doctor_id !== todoId);
  //   });
  // };

  return (
    <div className="App">
      <div className="app-container">
        <div className="container p-5">
          <NewDoctor getDoctors={getDoctors} />
          <DoctorList providers={doctors} todos={taskData} />
        </div>
      </div>
    </div>
  );
}

export default App;
