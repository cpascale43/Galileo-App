import React from "react";

interface TodoListProps {
  items: {
    doctor_id: string;
    first_name: string;
    last_name: string;
    degree: string;
    dob: string;
  }[];
  onExpandTodo: (
    id: string
  ) => Promise<any>;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul className="list-group">
      {props.items.map((todo) => (
        <li className="list-group-item" key={todo.doctor_id}>
          <div className="row">
            <div className="col">
              <span>
                {todo.first_name} {todo.last_name}
              </span>
            </div>
            <div className="col d-flex justify-content-end">
              <button
                className="btn btn-secondary align-bottom"
                onClick={props.onExpandTodo.bind(null, todo.doctor_id)}
              >
                Expand
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <span>Degree: {todo.degree}</span>
            </div>
            <div className="col-2">
              <span>Date of Birth: {todo.dob}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
