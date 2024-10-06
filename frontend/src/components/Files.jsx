import { useState, useRef } from 'react';
import axios from 'axios';

const Files = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState(''); // State for status message
    const [loading, setLoading] = useState(false); // State for loading indicator
    const fileInputRef = useRef(null); // Ref for file input

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = 'http://localhost:5000/uploadFile';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        
        // Get the token from local storage or state
        const token = localStorage.getItem('token'); // Or wherever you are storing the token
    
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${token}` // Include the token in headers
            },
        };

        setLoading(true); // Start loading
        axios.post(url, formData, config)
            .then((response) => {
                console.log(response.data);
                setMessage('File uploaded successfully!'); // Success message
                setFile(null); // Reset the file state
                fileInputRef.current.value = null; // Reset the file input
            })
            .catch((error) => {
                console.error(error); // Log error for debugging
                setMessage('Failed to upload file.'); // Error message
            })
            .finally(() => {
                setLoading(false); // Stop loading
            });
    };

    return (
        <div className="bg-gray-800 absolute top-96 mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-5 rounded shadow-lg flex flex-col items-center"> {/* Centering the box */}
            <h1 className="text-lg font-bold">Files</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center"> {/* Centering form items */}
                <input 
                    type="file" 
                    onChange={handleChange} 
                    ref={fileInputRef} // Attach the ref to the input
                    className="bg-purple-500 text-white p-2 rounded mb-2" // Adding margin for spacing
                />
                <button type="submit" className="bg-green-800 p-2" disabled={loading}> {/* Disable button while loading */}
                    {loading ? 'Uploading...' : 'Upload'}
                </button>
            </form>
            {loading && <p className="mt-2 text-yellow-300">Loading...</p>} {/* Loader message */}
            {message && ( // Display the message if it exists
                <p className="mt-2 text-yellow-300">{message}</p>
            )}
        </div>
    );
};

export default Files;
