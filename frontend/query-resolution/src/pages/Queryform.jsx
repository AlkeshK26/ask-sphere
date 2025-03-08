// src/components/QueryForm.jsx

import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa'; 
import axios from 'axios';

const Queryform = () => {
  const [title, setTitle] = useState('');
  const [explanation, setExplanation] = useState('');
  const [image, setImage] = useState(null); 

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // Get the user token

    if (!token) {
      alert("User not logged in!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", explanation);
    if (image) formData.append("image", image);
    console.log(formData)
    try {
      const response = await axios.post(
        "http://localhost:8080/askSphere/api/v1/queries/postQuery",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token, // Send token in headers
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error posting query:", error);
    }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log('Title:', title);
  //   console.log('Explanation:', explanation);
  //   console.log('Image:', image); // Log the uploaded image
  //   postedBy = localStorage.getItem("token");
  //   let queryData ={
  //     postedBy,
  //     title,
  //     explanation,
  //     image
  //   };
  //   console.log(queryData);
  //   // try{
  //   //   const response = await axios.post("http://localhost:8080/askSphere/api/v1/queries/postQuery", queryData);
  //   //   alert(response.data.message);

  //   // }catch{

  //   // }
  };

  return (
    <div className='p-[40px] pt-[90px]  mt-[20px] size-full'>
    <div className="flex  items-center justify-center">
      <div className="w-full max-w-5xl rounded-lg bg-gray-800 shadow-lg p-12">
        <h1 className="text-3xl font-bold text-white mb-6">Post Your Query</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="image-upload" className="block text-sm font-medium text-gray-300">
              Upload Your Query
            </label>
            <div className="flex items-center">
              <input
                type="file"
                id="image-upload"
                onChange={handleImageChange}
                className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                accept="image/*"
                required
              />
              <FaUpload className="ml-2 text-gray-400" size={24} />
            </div>
          </div>

          <div>
            <label htmlFor="explanation" className="block text-sm font-medium text-gray-300">
              Description Of Query (max 2000 words)
            </label>
            <textarea
              id="explanation"
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              maxLength={2000}
              rows="8"
              className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <p className="mt-1 text-sm text-gray-400">
              {explanation.split(' ').length} / 2000 words
            </p>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-purple-600 p-3 text-white hover:bg-purple-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Queryform;