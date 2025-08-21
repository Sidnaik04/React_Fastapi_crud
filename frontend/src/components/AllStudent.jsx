import React, { useState, useEffect } from "react";
import axios from "axios";

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const API_URL =
          import.meta.env.REACT_APP_API_URL ||
          "http://localhost:8000/students/";
        const response = await axios.get(`${API_URL}/students/`);
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">All Students</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg">
          <thead>
            <tr className="bg-gray-700">
              <th className="py-2 px-4 border-b border-gray-600 text-left">
                ID
              </th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">
                Name
              </th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">
                Email
              </th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">
                Age
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-700">
                <td className="py-2 px-4 border-b border-gray-600">
                  {student.id}
                </td>
                <td className="py-2 px-4 border-b border-gray-600">
                  {student.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-600">
                  {student.email}
                </td>
                <td className="py-2 px-4 border-b border-gray-600">
                  {student.age}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudents;
