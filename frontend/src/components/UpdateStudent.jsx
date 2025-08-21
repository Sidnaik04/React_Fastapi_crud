import React, { useState } from "react";
import axios from "axios";

const UpdateStudent = () => {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updateData = {};
      if (name) updateData.name = name;
      if (email) updateData.email = email;
      if (age) updateData.age = parseInt(age);
      const API_URL =
        import.meta.env.REACT_APP_API_URL || "http://localhost:8000/students/";
      await axios.put(`${API_URL}/students/`, updateData);
      setMessage("Student updated successfully!");
    } catch (error) {
      setMessage("Error updating student.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Update Student
      </h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block mb-2">Student ID</label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">New Name (Optional)</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">New Email (Optional)</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">New Age (Optional)</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-500 p-2 rounded"
        >
          Update Student
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default UpdateStudent;
