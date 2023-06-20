import React from "react";
import ResumeSummary from "./ResumeSummary";
import ResumeExperience from "./ResumeExperience";
import ResumeEducation from "./ResumeEducation";

export default function MainSectionTwo(props) {
  const experinceElements = props.experience.map((exp) => (
    <ResumeExperience key={exp.roleTo} exp={exp} res={props.responsibility} />
  ));
  return (
    <div className="mainsection-two">
      <ResumeSummary summary={props.summary} />
      <h3>Work Experience</h3>
      {experinceElements}
      <ResumeEducation />
    </div>
  );
}
