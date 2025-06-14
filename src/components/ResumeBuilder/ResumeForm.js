// ResumeForm.js
import React, { useState, useEffect } from "react";

function ResumeForm({ onChange }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    education: "",
    experience: "",
    skills: "",
  });

  useEffect(() => {
    onChange(formData); // Update parent on initial render
  }, []);

  const handleChange = (e) => {
    const updated = { ...formData, [e.target.name]: e.target.value };
    setFormData(updated);
    onChange(updated); // Live update to parent
  };

  return (
    <div className="resume-form">
      <h2>Enter Resume Details</h2>
      <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
      <textarea name="summary" placeholder="Professional Summary" value={formData.summary} onChange={handleChange} required />
      <textarea name="education" placeholder="Education" value={formData.education} onChange={handleChange} required />
      <textarea name="experience" placeholder="Work Experience" value={formData.experience} onChange={handleChange} required />
      <textarea name="skills" placeholder="Skills (comma separated)" value={formData.skills} onChange={handleChange} required />
    </div>
  );
}

export default ResumeForm;
