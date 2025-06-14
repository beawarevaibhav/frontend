import React from "react";
import "./TemplateStyles.css";

const Template3 = ({ data }) => {
  const { name, email, phone, summary, experience, education, skills } = data;

  return (
    <div className="template template3">
      <header>
        <h1>{name}</h1>
        <small>{email} | {phone}</small>
      </header>
      <section>
        <h3>Summary</h3>
        <p>{summary}</p>
      </section>
      <section>
        <h3>Experience</h3>
        <p>{experience}</p>
      </section>
      <section>
        <h3>Education</h3>
        <p>{education}</p>
      </section>
      <section>
        <h3>Skills</h3>
        <p>{skills}</p>
      </section>
    </div>
  );
};

export default Template3;
