import React, { useState } from "react";
import apiClient from "../api";

const GetStudent = () => {
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const response = await apiClient.get(`/students/${studentId}`);
      setStudent(response.data);
      setError("");
    } catch {
      setStudent(null);
      setError("Student not found.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Get Student by ID
      </h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="Enter Student ID"
          className="flex-grow p-2 rounded-l bg-gray-700 border border-gray-600"
        />
        <button
          onClick={handleSearch}
          className="bg-purple-600 hover:bg-purple-500 p-2 rounded-r"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {student && (
        <div className="bg-gray-700 p-4 rounded">
          <p>
            <strong>ID:</strong> {student.id}
          </p>
          <p>
            <strong>Name:</strong> {student.name}
          </p>
          <p>
            <strong>Email:</strong> {student.email}
          </p>
          <p>
            <strong>Age:</strong> {student.age}
          </p>
        </div>
      )}
    </div>
  );
};

export default GetStudent;
