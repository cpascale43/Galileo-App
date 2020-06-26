import React, { useState } from "react";

import { Task } from "../doctor.model";

interface DoctorTaskProps {
  id: string;
  todos: {
    task_id: string;
    owner: string;
    priority: string;
  }[];
}

const DoctorTasks: React.FC<DoctorTaskProps> = (props) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [visible, setVisible] = useState(false);

  const expandHandler = async (id: string) => {
    setVisible(!visible);
    let filteredTasks = props.todos.filter((task) => task.owner === id);
    filteredTasks = filteredTasks;
    setTasks(filteredTasks);
  };

  return (
    <div className="row">
      <div className="col d-flex flex-column justify-content-between">
        <ul className="p-3">
          {visible && tasks
            ? tasks.map((task: Task) => (
                <li key={task.task_id}>{task.task_id}</li>
              ))
            : null}
        </ul>
      </div>
      <div className="col d-flex flex-column align-items-end">
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
