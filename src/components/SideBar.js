import React from "react";
import PersonalDetails from "./PersonalDetails";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Awards from "./Awards";
import Summary from "./Summary";

export default function SideBar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar-one">
        <PersonalDetails
          nameValue={props.nameValue}
          nameHolder={props.nameHolder}
          titleValue={props.titleValue}
          titleHolder={props.titleHolder}
          cellValue={props.cellValue}
          cellHolder={props.cellHolder}
          emailValue={props.emailValue}
          emailHolder={props.emailHolder}
          linkedinValue={props.linkedinValue}
          linkedinHolder={props.linkedinHolder}
          onChange={props.onChange}
        />
        <Skills
          handleAddSkill={props.handleAddSkill}
          setSkill={props.setSkill}
          skillValue={props.skillValue}
          skill={props.skill}
        />
        <Hobbies
          handleAddHobby={props.handleAddHobby}
          hobbyValue={props.hobbyValue}
          setHobby={props.setHobby}
          hobby={props.hobby}
        />
        <Awards
          handleAddAward={props.handleAddAward}
          awardValue={props.awardValue}
          setAward={props.setAward}
          award={props.award}
        />
      </div>
      <div className="sidebar-two">
        <Summary
          summaryValue={props.summaryValue}
          summaryHolder={props.summaryHolder}
          onChange={props.onChange}
        />
        <WorkExperience
          // companyValue={props.companyValue}
          companyHolder={props.companyHolder}
          // roleValue={props.roleValue}
          roleHolder={props.roleHolder}
          // roleFromValue={props.roleFromValue}
          roleFromHolder={props.roleFromHolder}
          // roleToValue={props.roleToValue}
          roleToHolder={props.roleToHolder}
          // roleDutiesValue={props.roleDutiesValue}
          roleDutiesHolder={props.roleDutiesHolder}
          onChange2={props.onChange2}
          experience={props.experience}
          setExperience={props.setExperience}
          expValue={props.expValue}
          handleAddRes={props.handleAddRes}
          resValue={props.resValue}
          setResponsibility={props.setResponsibility}
          responsibility={props.responsibility}
          setResValue={props.setResValue}
        />
        <Education />
      </div>
    </div>
  );
}
