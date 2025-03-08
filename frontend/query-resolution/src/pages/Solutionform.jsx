import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Solutionform = () => {
  const { queryId} = useParams();


  const [title, setTitle] = useState('');
  const [explanation, setExplanation] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Title:', title);
    console.log('Explanation:', explanation);
    console.log('Image:', image);

    const token = localStorage.getItem("token"); // Get the user token

    if (!token) {
      alert("User not logged in!");
      return;
    }

    const formData = new FormData();
    formData.append("description", explanation);
    if (image) formData.append("image", image);
    //if (queryId) formData.append("queryId", queryId);
    //const queryId = '67c9b50b93b1c3eabbe31b31';
    formData.append("queryId", queryId)
    console.log(formData)
    try {
      const response = await axios.post(
        "http://localhost:8080/askSphere/api/v1/solutions/postSolution",
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
  };

  return (
    <div className='p-[30px] pt-[90px] min-h-screen bg-gray-900 text-white '>

    <div className='flex items-center justify-center min-h-screen bg-gray-900 text-white p-6'>
      <div className='w-full max-w-3xl bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6 flex flex-col items-center'>
        <h1 className='text-3xl font-bold text-center text-white'>Post Query Solution</h1>
        <form onSubmit={handleSubmit} className='space-y-6 w-full'>
          {/* <div>
            <label className='block text-sm font-medium text-gray-300'>Title</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='mt-2 w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div> */}

          <div>
            <label className='block text-sm font-medium text-gray-300'>Upload Solution Image</label>
            <div className='flex items-center mt-2 bg-gray-700 p-3 rounded-lg border border-gray-600 cursor-pointer hover:bg-gray-600 transition'>
              <input
                type='file'
                onChange={handleImageChange}
                className='hidden'
                accept='image/*'
                id='image-upload'
                required
              />
              <label htmlFor='image-upload' className='flex items-center space-x-2 cursor-pointer w-full'>
                <FaUpload className='text-gray-400' size={20} />
                <span className='text-gray-300'>{image ? image.name : 'Choose an image'}</span>
              </label>
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-300'>Description Of Solution (max 2000 words)</label>
            <textarea
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              maxLength={2000}
              rows='6'
              className='mt-2 w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
            <p className='mt-1 text-sm text-gray-400'>{explanation.split(' ').length} / 2000 words</p>
          </div>

          <button
            type='submit'
            className='w-full bg-purple-600 hover:bg-purple-700 transition duration-200 p-3 rounded-lg text-white font-semibold shadow-md'
          >
            Submit
          </button>
        </form>
      </div>
    </div></div>
  );
};

export default Solutionform;