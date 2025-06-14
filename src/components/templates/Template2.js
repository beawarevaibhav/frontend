import React from "react";
import "./TemplateStyles.css";

const Template2 = ({ data }) => {
  const { name, email, phone, summary, experience, education, skills } = data;

  return (
    <div className="template template2">
      <h1>{name}</h1>
      <p>{email} | {phone}</p>
      <h2>Summary</h2>
      <p>{summary}</p>
      <h2>Experience</h2>
      <p>{experience}</p>
      <h2>Education</h2>
      <p>{education}</p>
      <h2>Skills</h2>
      <ul>
        {skills.split(',').map((skill, index) => (
          <li key={index}>✅ {skill.trim()}</li>
        ))}
      </ul>
    </div>
  );
};

export default Template2;
