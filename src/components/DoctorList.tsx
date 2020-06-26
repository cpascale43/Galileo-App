import React from "react";

import DoctorTasks from "./DoctorTasks";
const img =
  "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg";

interface DoctorListProps {
  providers: {
    doctor_id: string;
    first_name: string;
    last_name: string;
    degree: string;
    dob: string;
  }[];
  todos: {
    task_id: string;
    owner: string;
    priority: string;
  }[];
}

const DoctorList: React.FC<DoctorListProps> = (props) => {
  return (
    <ul className="list-group">
      {props.providers.map((doc) => (
        <li className="list-group-item" key={doc.doctor_id}>
          <div className="row">
            <div className="col-3">
              <img
                className="pic"
                src={img}
                alt={doc.first_name}
                width="150"
                height="150"
              />
            </div>
            <div className="col">
              <h1 className="student-name">
                {doc.first_name} {doc.last_name}
              </h1>
              <p>Degree: {doc.degree}</p>
              <p>Date of Birth: {doc.dob}</p>
              <DoctorTasks todos={props.todos} id={doc.doctor_id} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DoctorList;
