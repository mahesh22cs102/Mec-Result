import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Result from "./components/Result";

function App() {
  const [student, setStudent] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Login setStudent={setStudent} />} />
      <Route path="/result" element={<Result student={student} />} />
    </Routes>
  );
}

export default App;
