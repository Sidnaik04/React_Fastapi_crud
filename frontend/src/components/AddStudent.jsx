import React, { useState } from "react";
import apiClient from "../api";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post("/students/", {
        name,
        email,
        age: parseInt(age),
      });
      setMessage(`Student added successfully with ID: ${response.data.id}`);
      setName("");
      setEmail("");
      setAge("");
    } catch (error) {
      setMessage("Error adding student.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Add a New Student
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-500 p-2 rounded"
        >
          Add Student
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default AddStudent;
