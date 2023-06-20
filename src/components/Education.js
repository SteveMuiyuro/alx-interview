import React from "react";

export default function Education() {
  return (
    <div className="education-info">
      <p className="personal-info-title">Update Education Details:</p>
      <label htmlFor="company">School:</label>
      <input
        type="text"
        id="school"
        placeholder="Enter School"
        className="personal-inputs"
      />
      <label htmlFor="course">Course:</label>
      <input
        type="text"
        id="course"
        placeholder="Enter Course"
        className="personal-inputs"
      />

      <label htmlFor="fromDate">From:</label>
      <input type="date" id="date" className="personal-inputs" />
      <label htmlFor="date">To:</label>
      <input type="date" id="toDate" className="personal-inputs" />

      <span>Add Education:</span>
      <button className="add-education-btn">+</button>
    </div>
  );
}
