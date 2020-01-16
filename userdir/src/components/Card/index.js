import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.firstname, props.lastname} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>First Name:</strong> {props.firstname}
          </li>
          <li>
            <strong>Last Name:</strong> {props.lastname}
          </li>
          <li>
            <strong>Department:</strong> {props.department}
          </li>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
