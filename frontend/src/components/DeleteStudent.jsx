import React, { useState } from 'react';
import axios from 'axios';

const DeleteStudent = () => {
    const [studentId, setStudentId] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/students/${studentId}`);
            setMessage('Student deleted successfully!');
            setStudentId('');
        } catch (error) {
            setMessage('Error deleting student. Make sure the ID is correct.');
            console.error(error);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Delete Student by ID</h2>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder="Enter Student ID"
                    className="flex-grow p-2 rounded-l bg-gray-700 border border-gray-600"
                />
                <button onClick={handleDelete} className="bg-red-600 hover:bg-red-500 p-2 rounded-r">Delete</button>
            </div>
            {message && <p className="text-center">{message}</p>}
        </div>
    );
};

export default DeleteStudent;