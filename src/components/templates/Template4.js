import React from "react";
import "./TemplateStyles.css";

const Template4 = ({ data }) => {
  const { name, email, phone, summary, experience, education, skills } = data;

  return (
    <div className="template template4">
      <div className="header">
        <h1>{name}</h1>
        <p>{email} | {phone}</p>
      </div>
      <div className="section"><strong>Summary:</strong> {summary}</div>
      <div className="section"><strong>Experience:</strong> {experience}</div>
      <div className="section"><strong>Education:</strong> {education}</div>
      <div className="section">
        <strong>Skills:</strong>
        <ul>
          {skills.split(',').map((skill, index) => (
            <li key={index}>• {skill.trim()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Template4;
