import React, { useState } from "react";
import axios from "axios";

import { Task } from "../doctor.model";

interface DoctorTaskProps {
  id: string;
}

const DoctorTasks: React.FC<DoctorTaskProps> = (props) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [visible, setVisible] = useState(false);

  const expandHandler = async (id: string) => {
    setVisible(!visible);
    // let filteredTasks = props.todos.filter((task) => task.owner === id);
    // setTasks(filteredTasks);
    const { data } = await axios.get(
      `https://testapi.io/api/akirayoglu/0/tasks/${id}`
    );
    setTasks(data);
  };

  return (
    <div className="row">
      <div className="col">
        {visible && tasks
          ? tasks.map((task: Task) => (
              <span key={task.task_id}>{task.task_id}</span>
            ))
          : null}
      </div>
      <div className="col d-flex justify-content-end">
        <button
          className="btn btn-secondary align-bottom"
          onClick={expandHandler.bind(null, props.id)}
        >
          Expand
        </button>
      </div>
    </div>
  );
};

export default DoctorTasks;
