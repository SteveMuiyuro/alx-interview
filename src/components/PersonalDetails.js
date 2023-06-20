import React from "react";

export default function PersonaDetails(props) {
  return (
    <div className="personal-info">
      <p className="personal-info-title">Update Personal Details:</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          className="personal-inputs"
          value={props.nameValue}
          name={props.nameHolder}
          onChange={props.onChange}
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter Title e.g Frontend Developer"
          className="personal-inputs"
          value={props.titleValue}
          name={props.titleHolder}
          onChange={props.onChange}
        />
        <label htmlFor="cell">Cell:</label>
        <input
          type="text"
          id="cell"
          placeholder="Enter Phone Number"
          className="personal-inputs"
          value={props.cellValue}
          name={props.cellHolder}
          onChange={props.onChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email Address"
          className="personal-inputs"
          value={props.emailValue}
          name={props.emailHolder}
          onChange={props.onChange}
        />
        <label htmlFor="linkedIn">LinkedIn Url:</label>
        <input
          type="text"
          id="linkedIn"
          placeholder="Enter LinkedIn url Link"
          className="personal-inputs"
          value={props.linkedinValue}
          name={props.linkedinHolder}
          onChange={props.onChange}
        />
      </form>
    </div>
  );
}
