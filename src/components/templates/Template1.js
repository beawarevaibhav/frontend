// Template1.js
import React from "react";
import "./TemplateStyles.css"; // Keep your shared styles here

function Template1({ data }) {
  return (
    <div className="template template1">
      <header className="template-header">
        <h1>{data.name}</h1>
        <p>{data.email} | {data.phone}</p>
      </header>

      <section>
        <h2>Summary</h2>
        <p>{data.summary}</p>
      </section>

      <section>
        <h2>Experience</h2>
        <p>{data.experience}</p>
      </section>

      <section>
        <h2>Education</h2>
        <p>{data.education}</p>
      </section>

      <section>
        <h2>Skills</h2>
        <p>{data.skills}</p>
      </section>
    </div>
  );
}

export default Template1;
