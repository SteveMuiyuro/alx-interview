import React from "react";
import MainSectionOne from "./MainSectionOne";
import MainSectionTwo from "./MainSectionTwo";

export default function Main(props) {
  return (
    <div className="main">
      <MainSectionOne
        name={props.name}
        title={props.title}
        cell={props.cell}
        email={props.email}
        linkedin={props.linkedin}
        skill={props.skill}
        hobby={props.hobby}
        award={props.award}
      />
      <MainSectionTwo
        summary={props.summary}
        company={props.company}
        role={props.role}
        roleFrom={props.roleFrom}
        roleTo={props.roleTo}
        roleDuties={props.roleDuties}
        experience={props.experience}
        responsibility={props.responsibility}
      />
    </div>
  );
}
