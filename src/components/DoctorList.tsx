import React from "react";

import DoctorTasks from "./DoctorTasks";

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
            <div className="col">
              <img
                className="pic"
                src={
                  "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg"
                }
                alt={doc.first_name}
                width="150"
                height="150"
              />
            </div>
            <div className="col">
              <span>
                {doc.first_name} {doc.last_name}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <span>Degree: {doc.degree}</span>
            </div>
            <div className="col">
              <span>Date of Birth: {doc.dob}</span>
            </div>
          </div>
          <DoctorTasks todos={props.todos} id={doc.doctor_id} />
        </li>
      ))}
    </ul>
  );
};

export default DoctorList;
