import React, { useState, useEffect } from 'react';

const Teacher = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/student.json')  // Corrected the path here
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setStudents(data.students))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="min-h-screen  bg-black">
      {/* Navbar */}
      

      {/* Search and Filters */}
      <div className="flex justify-between px-6 py-4">
        <input
          type="text"
          placeholder="Search by name, class, email..."
          className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-lg"
        />
        <button className=" border border-gray-300 rounded-md text-white px-4 py-2">
          Select Class
        </button>
        <button className="ml-4 bg-purple-600 text-white rounded-md px-4 py-2">
          Filter
        </button>
      </div>

      {/* Student Profiles */}
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-4 text-white">Student Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Student Card */}
          {students.length > 0 ? (
            students.map((student) => (
              <div key={student.id} className="border border-gray-300 rounded-md p-4 text-white">
                <p className="font-semibold">{student.name}</p>
                <p>Class: {student.class}</p>
                <p>Attendance: {student.attendance}%</p>
                <button className="mt-4 border border-purple-600 text-purple-600 rounded-md px-4 py-2 w-full">
                  Send Message
                </button>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      {/* Add New Student Button */}
      <div className="px-6 py-8 flex justify-center">
        <button className="bg-white hover:bg-gray-700 hover:text-white text-black rounded-md px-6 py-3">
          + Add New Student
        </button>
      </div>
    </div>
  );
};

export default Teacher;
