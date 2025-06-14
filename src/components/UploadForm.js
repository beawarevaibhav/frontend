import React, { useState } from "react";
import axios from "axios";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await axios.post("https://backend-3-k1a1.onrender.com/api/grade", formData);
      console.log("Server Response:", response); // ✅ Debug log
      setScore(response.data.score);
      setFeedback(response.data.feedback);
    } catch (error) {
      console.error("Error uploading resume:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="upload-form">
      <h2>Upload Resume for Grading</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button type="submit">Upload & Grade</button>
      </form>

      {score !== null && (
        <div className="result">
          <h3>Score: {score}/100</h3>
          <h4>Feedback:</h4>
          <ul>
            {feedback.map((item, index) => (
              <li key={index}>⚠️ {item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UploadForm;
