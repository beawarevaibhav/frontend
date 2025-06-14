// ResumeBuilder.js
import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import TemplateSelector from "./TemplateSelector";
import ResumeForm from "./ResumeForm";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import Template3 from "../templates/Template3";
import Template4 from "../templates/Template4";

function ResumeBuilder() {
  const [template, setTemplate] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
  });

  const handleFormChange = (data) => {
    setFormData(data);
  };

  const handleTemplateSelect = (templateId) => {
    setTemplate(templateId);
  };

  const renderSelectedTemplate = () => {
    switch (template) {
      case "template1":
        return <Template1 data={formData} />;
      case "template2":
        return <Template2 data={formData} />;
      case "template3":
        return <Template3 data={formData} />;
      case "template4":
        return <Template4 data={formData} />;
      default:
        return null;
    }
  };

  const handleDownload = () => {
    const input = document.getElementById("resume-preview");
    if (!input) {
      alert("Resume preview not available!");
      return;
    }

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="resume-builder">
      {!template ? (
        <TemplateSelector onSelect={handleTemplateSelect} />
      ) : (
        <>
          <button onClick={() => setTemplate(null)} style={{ marginBottom: "1rem" }}>
            ⬅ Choose Different Template
          </button>

          <ResumeForm onChange={handleFormChange} />

          <div>
            <h3>Live Preview:</h3>
            <div id="resume-preview" className="resume-preview">
              {renderSelectedTemplate()}
            </div>
            <button onClick={handleDownload} style={{ marginTop: "1rem" }}>
              Download PDF
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ResumeBuilder;
