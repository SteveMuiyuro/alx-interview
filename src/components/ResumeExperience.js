import React from "react";

export default function ResumeExperience(props) {
  const resElements = props.res.map((respo) => <li key={respo}>{respo}</li>);
  return (
    <div className="resume-work">
      <p className="work-company">{props.exp.company}</p>
      <p className="work-role">{props.exp.role}</p>
      <span>From: </span>
      <span>{props.exp.roleFrom}</span> <span>To: </span>
      <span>{props.exp.roleTo}</span>
      <h4>Responsibilities:</h4>
      <ul className="profile-summary">{resElements}</ul>
      <hr />
    </div>
  );
}
