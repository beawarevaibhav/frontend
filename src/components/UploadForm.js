import React, { useState } from "react";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/grade", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleChange} />
        <button type="submit">Upload & Grade</button>
      </form>

      {result && (
        <div className="result">
          <p><strong>Score:</strong> {result.score}/100</p>
          <p><strong>Contact:</strong> {result.details.contact}</p>
          <p><strong>Feedback:</strong></p>
          <ul>
            {result.feedback.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UploadForm;
