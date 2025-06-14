import React, { useState } from "react";

function CreateResume() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Resume created:", form);
    // TODO: You can send this to backend or generate a PDF
  };

  return (
    <div>
      <h2>Create Your Resume</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <textarea name="education" placeholder="Education" onChange={handleChange} />
        <textarea name="experience" placeholder="Experience" onChange={handleChange} />
        <textarea name="skills" placeholder="Skills" onChange={handleChange} />
        <button type="submit">Save Resume</button>
      </form>
    </div>
  );
}

export default CreateResume;
 