import { useState } from 'react';
import axios from 'axios';

const Files = () => {
    const [file, setFile] = useState(null);

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
        
        axios.post(url, formData, config)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error); // Log error for debugging
            });
    };

    return (
        <div className="bg-red-500 absolute top-96 text-white p-5">
            <h1>Files</h1>
            <form onSubmit={handleSubmit}> {/* Correctly attach the onSubmit to the form */}
                <input type="file" onChange={handleChange} />
                <button type="submit" className="bg-green-800 p-2">Upload</button>
            </form>
        </div>
    );
};

export default Files;
