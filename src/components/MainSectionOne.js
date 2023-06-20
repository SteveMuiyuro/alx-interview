import React from "react";
import ResumePersonals from "./ResumePersonals";
import ResumeSkills from "./ResumeSkills";
import ResumeHobbies from "./ResumeHobbies";
import ResumeAwards from "./ResumeAwards";

export default function MainSectionOne(props) {
  const skillsAquired =
    props.skill.length > 0 &&
    props.skill.map((skl) => <li key={skl}>{skl}</li>);

  const hobbiesAquired =
    props.hobby.length > 0 &&
    props.hobby.map((hby) => <li key={hby}>{hby}</li>);

  const awardsAquired =
    props.award.length > 0 &&
    props.award.map((awd) => <li key={awd}>{awd}</li>);

  return (
    <div className="mainsection-one">
      <ResumePersonals
        name={props.name}
        title={props.title}
        email={props.email}
        cell={props.cell}
        linkedin={props.linkedin}
      />
      <ResumeSkills skillsAquired={skillsAquired} />
      <ResumeHobbies hobbiesAquired={hobbiesAquired} />
      <ResumeAwards awardsAquired={awardsAquired} />
    </div>
  );
}
