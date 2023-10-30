import React from "react";
import { SkillProps } from "./skills.types";

const Skill = (props: SkillProps) => {
  const { skills } = props;
  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );
};

export default Skill;
