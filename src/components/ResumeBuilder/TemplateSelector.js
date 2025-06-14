// TemplateSelector.js
import React from "react";
import "./TemplateSelector.css"; // Optional CSS for styling

function TemplateSelector({ onSelect }) {
  const templates = [
    { id: "template1", name: "Modern" },
    { id: "template2", name: "Classic" },
    { id: "template3", name: "Professional" },
    { id: "template4", name: "Creative" },
  ];

  return (
    <div className="template-selector">
      <h2>Select a Resume Template</h2>
      <div className="template-grid">
        {templates.map((template) => (
          <button
            key={template.id}
            className="template-card"
            onClick={() => onSelect(template.id)}
          >
            {template.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TemplateSelector;
