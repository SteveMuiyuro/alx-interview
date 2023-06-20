import React, { useRef } from "react";

export default function WorkExperience(props) {
  const resInputField = useRef();
  const compInputField = useRef();
  const roleInputField = useRef();
  const roleFromField = useRef();
  const roleToField = useRef();

  function handleClickAdd() {
    let fieldValue = resInputField.current.value;
    if (fieldValue && !props.responsibility.includes(fieldValue)) {
      props.setResponsibility((prev) => [...prev, props.resValue]);
    }

    resInputField.current.value = "";
  }
  function addExperience() {
    props.setExperience((prev) => prev.concat(props.expValue));
    compInputField.current.value = "";
    roleInputField.current.value = "";
    roleFromField.current.value = "";
    roleToField.current.value = "";
  }

  return (
    <div className="work-experience-info">
      <p className="personal-info-title">Update Work Experience Details:</p>
      <label htmlFor="company">Company Name:</label>
      <input
        type="text"
        id="company"
        placeholder="Company Name"
        className="personal-inputs"
        // value={props.companyValue}
        onChange={props.onChange2}
        name={props.companyHolder}
        ref={compInputField}
      />
      <label htmlFor="job_role">Job Role:</label>
      <input
        type="text"
        id="job-role"
        placeholder="Enter Job Title"
        className="personal-inputs"
        // value={props.roleValue}
        onChange={props.onChange2}
        name={props.roleHolder}
        ref={roleInputField}
      />

      <label htmlFor="fromDate">From:</label>
      <input
        type="date"
        id="date"
        placeholder="Enter Job Title"
        className="personal-inputs"
        // value={props.roleFromValue}
        onChange={props.onChange2}
        name={props.roleFromHolder}
        ref={roleFromField}
      />
      <label htmlFor="date">To:</label>
      <input
        type="date"
        id="toDate"
        placeholder="Enter Job Title"
        className="personal-inputs"
        // value={props.roleToValue}
        onChange={props.onChange2}
        name={props.roleToHolder}
        ref={roleToField}
      />
      <span>Add Company Info:</span>
      <button className="add-work-experience-btn" onClick={addExperience}>
        +
      </button>
      <div className="responsibilities-info">
        <label htmlFor="responsibilities">Responsibilties:</label>
        <input
          id="responsibilities"
          placeholder="Enter Responsibilities"
          className="personal-inputs"
          // value={props.roleDutiesValue}
          onChange={props.handleAddRes}
          ref={resInputField}
        />
        <button className="add-responsibilities-btn" onClick={handleClickAdd}>
          + Add Role
        </button>
      </div>
    </div>
  );
}
