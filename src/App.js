import React, { useState } from "react";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import "./App.css";

export default function App() {
  const [PersonalData, setPersonalData] = useState({
    name: "",
    title: "",
    cell: "",
    email: "",
    linkedin: "",
    summary: "",
  });

  const [experience, setExperience] = useState([]);
  const [expValue, setExpValue] = useState({});

  const [skill, setSkill] = useState([]);
  const [skillValue, setSkillValue] = useState("");

  const [hobby, setHobby] = useState([]);
  const [hobbyValue, setHobbyValue] = useState("");

  const [award, setAward] = useState([]);
  const [awardValue, setAwardValue] = useState("");

  const [responsibility, setResponsibility] = useState([]);
  const [resValue, setResValue] = useState("");

  function handleChange2(e) {
    const { name, value } = e.target;
    setExpValue((prev) => ({ ...prev, [name]: value }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setPersonalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleAddSkill(e) {
    const { value } = e.target;
    setSkillValue(value);
  }

  function handleAddHobby(e) {
    const { value } = e.target;
    setHobbyValue(value);
  }

  function handleAddAward(e) {
    const { value } = e.target;
    setAwardValue(value);
  }

  function handleAddRes(e) {
    const { value } = e.target;
    setResValue(value);
  }

  return (
    <div className="app-container">
      <SideBar
        nameValue={PersonalData.name}
        nameHolder="name"
        titleValue={PersonalData.title}
        titleHolder="title"
        cellValue={PersonalData.cell}
        cellHolder="cell"
        emailValue={PersonalData.email}
        emailHolder="email"
        linkedinValue={PersonalData.linkedin}
        linkedinHolder="linkedin"
        onChange={handleChange}
        summaryValue={PersonalData.summary}
        summaryHolder="summary"
        // companyValue={experience.company}
        companyHolder="company"
        // roleValue={experience.role}
        roleHolder="role"
        // roleFromValue={experience.roleFrom}
        roleFromHolder="roleFrom"
        // roleToValue={experience.roleTo}
        roleToHolder="roleTo"
        // roleDutiesValue={experience.roleDuties}
        roleDutiesHolder="roleDuties"
        experience={experience}
        setExperience={setExperience}
        onChange2={handleChange2}
        handleAddSkill={handleAddSkill}
        handleAddHobby={handleAddHobby}
        handleAddAward={handleAddAward}
        handleAddRes={handleAddRes}
        setSkill={setSkill}
        setHobby={setHobby}
        setAward={setAward}
        setResponsibility={setResponsibility}
        setResValue={setResValue}
        skillValue={skillValue}
        hobbyValue={hobbyValue}
        awardValue={awardValue}
        resValue={resValue}
        skill={skill}
        hobby={hobby}
        award={award}
        responsibility={responsibility}
        expValue={expValue}
      />
      <Main
        name={PersonalData.name}
        title={PersonalData.title}
        cell={PersonalData.cell}
        email={PersonalData.email}
        linkedin={PersonalData.linkedin}
        summary={PersonalData.summary}
        // company={experience.company}
        // role={experience.role}
        // roleFrom={experience.roleFrom}
        // roleTo={experience.roleTo}
        // roleDuties={experience.roleDuties}
        skill={skill}
        hobby={hobby}
        award={award}
        experience={experience}
        responsibility={responsibility}
      />
    </div>
  );
}
