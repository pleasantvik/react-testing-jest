import React, { useEffect, useState } from "react"
import { SkillProps } from "./skills.types"

const Skill = (props: SkillProps) => {
  const { skills } = props
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  useEffect(() => {
    setTimeout(() => setIsLoggedIn(true), 500)
  }, [])
  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn && (
        <button
          style={{
            background: "red",
            color: "white",
          }}
        >
          Start learning
        </button>
      )}
      {!isLoggedIn && (
        <button
          style={{
            background: "white",
            color: "red",
          }}
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}
    </>
  )
}

export default Skill
