import React from "react";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import Template3 from "../templates/Template3";
import Template4 from "../templates/Template4";

function ResumePreview({ formData, selectedTemplate }) {
  if (!formData) return null;

  const templates = {
    template1: <Template1 data={formData} />,
    template2: <Template2 data={formData} />,
    template3: <Template3 data={formData} />,
    template4: <Template4 data={formData} />,
  };

  return (
    <div className="resume-preview">
      <h2>Resume Preview</h2>
      {templates[selectedTemplate] || <p>Please select a valid template.</p>}
    </div>
  );
}

export default ResumePreview;
