import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UploadForm from "./components/UploadForm";
import CreateResume from "./components/CreateResume";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="dashboard">
        <aside className="sidebar">
          <h2>Resume Grader</h2>
          <nav>
            <Link to="/">Grade Resume</Link>
            <Link to="/create">Create Resume</Link>
          </nav>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<UploadForm />} />
            <Route path="/create" element={<CreateResume />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
