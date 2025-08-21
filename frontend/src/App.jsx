import React, { useState } from "react";
import AllStudents from './components/AllStudent';
import AddStudent from "./components/AddStudent";
import DeleteStudent from "./components/DeleteStudent";
import GetStudent from "./components/GetStudent";
import UpdateStudent from "./components/UpdateStudent";

function App() {
  const [activeComponent, setActiveComponent] = useState("all");

  const renderComponent = () => {
    switch (activeComponent) {
      case "add":
        return <AddStudent />;
      case "get":
        return <GetStudent />;
      case "update":
        return <UpdateStudent />;
      case "delete":
        return <DeleteStudent />;
      default:
        return <AllStudents />;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <header className="bg-gray-800 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-center text-teal-400">
          Student Management System
        </h1>
      </header>
      <nav className="flex justify-center p-4 bg-gray-800 border-t border-b border-gray-700">
        <button
          onClick={() => setActiveComponent("all")}
          className="mx-2 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 transition-colors"
        >
          All Students
        </button>
        <button
          onClick={() => setActiveComponent("add")}
          className="mx-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors"
        >
          Add Student
        </button>
        <button
          onClick={() => setActiveComponent("get")}
          className="mx-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 transition-colors"
        >
          Get Student
        </button>
        <button
          onClick={() => setActiveComponent("update")}
          className="mx-2 px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-500 transition-colors"
        >
          Update Student
        </button>
        <button
          onClick={() => setActiveComponent("delete")}
          className="mx-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition-colors"
        >
          Delete Student
        </button>
      </nav>
      <main className="p-8">{renderComponent()}</main>
    </div>
  );
}

export default App;
