import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Main TeacherUploads Component
const TeacherUploads = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch("http://localhost:5000/images"); // Endpoint to fetch the list of uploaded files
        if (!response.ok) throw new Error("Failed to fetch files");
        const data = await response.json();
        setFiles(data);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, []);

  // Function to determine if a file is an image
  const isImage = (fileName) => {
    const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'];
    return extensions.some(ext => fileName.toLowerCase().endsWith(ext));
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen py-10 px-6 relative">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold tracking-wide mb-6 text-purple-600 mt-24">
          Teacher Uploads
        </h1>
        <p className="text-lg font-light text-white max-w-3xl mx-auto">
          Here are the files uploaded by the teachers. Click to download.
        </p>
      </motion.div>

      {/* Uploaded Files List */}
      <div className="flex max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-xl space-y-12 w-full">
          {files.length === 0 ? (
            <p className="text-white text-center">No files uploaded yet.</p>
          ) : (
            files.map((file, index) => (
              <motion.div
                key={index}
                className="mb-4 p-4 bg-black rounded-lg shadow-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                viewport={{ once: false }}
              >
                {isImage(file) ? (
                  <img
                    src={`http://localhost:5000/uploads/${file}`} // Adjusted path for images
                    alt={file}
                    className="max-w-full h-auto rounded-md"
                  />
                ) : (
                  <a
                    href={`http://localhost:5000/uploads/${file}`} // Adjusted path for downloading files
                    download
                    className="text-yellow-300 hover:underline"
                  >
                    {file}
                  </a>
                )}
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherUploads;