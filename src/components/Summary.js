import React from "react";

export default function Summary(props) {
  return (
    <div className="summary-info">
      <p className="personal-info-title">Update Summary:</p>
      <label htmlFor="summary">Summary:</label>
      <textarea
        id="summary"
        placeholder="Profile Summary"
        className="personal-inputs"
        value={props.summaryValue}
        onChange={props.onChange}
        name={props.summaryHolder}
      />
    </div>
  );
}
