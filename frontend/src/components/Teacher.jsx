import React, { useState, useEffect } from 'react';

const Teacher = () => {
  const [students, setStudents] = useState([]); // Initialize students as an empty array
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null);     // Add error state

  // Fetch student data from the API
  useEffect(() => {
    fetch('http://localhost:5000/students') // Replace with your actual API
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data || []); // Set the students array
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-screen mt-24 bg-black z-50 ">
      {/* Navbar */}
      <div className="flex justify-between px-6 py-4">
        <h1 className="text-white font-bold text-xl">Student Profiles</h1>
      </div>

      {/* Student Profiles */}
      <div className="px-6 py-4">
        {loading ? (
          <p className="text-white">Loading...</p> // Show loading message
        ) : error ? (
          <p className="text-red-500">Error: {error}</p> // Show error message
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.length > 0 ? (
              students.map((student) => (
                <div key={student._id} className="border border-gray-300 rounded-md p-4 text-white">
                  <p className="font-semibold">Username: {student.username}</p>
                  <p>Email: {student.email}</p>
                  <p>Class: {student.className}</p>
                  <button className="mt-4 border border-purple-600 text-purple-600 rounded-md px-4 py-2 w-full">
                    View Details
                  </button>
                </div>
              ))
            ) : (
              <p className="text-white">No students available</p>
            )}
          </div>
        )}
      </div>

      {/* Add New Student Button */}
      <div className="px-6 py-8 flex justify-center">
        {/* Optional Add New Student Button Here */}
      </div>
    </div>
  );
};

export default Teacher;
