import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Ashish Jayaswal");
  const [bio, setBio] = useState("Software Developer | Open Source Contributor");
  const [pronouns, setPronouns] = useState("he/him");
  const [location, setLocation] = useState("India");
  const [email, setEmail] = useState("ashish@example.com");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className='p-[30px] pt-[90px] min-h-screen bg-gray-900 text-white flex'>
      {/* Left Sidebar - User Detail */}
      <div className="bg-gray-800 p-4 rounded-lg w-1/4 h-screen overflow-y-auto flex-shrink-0">
        <div className="flex flex-col items-center mb-4 pt-4">
          {/* Profile Picture */}
          <div className="w-20 h-20 rounded-full bg-gray-600 mb-4"></div>
          <h2 className="text-lg font-bold">{name}</h2>
          <button onClick={handleEditClick} className="mt-2 px-3 py-1 bg-blue-500 rounded text-sm">Edit</button>
        </div>

        {isEditing && (
          <form className="space-y-2 p-3 bg-gray-700 rounded" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-400 text-sm">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-1 bg-gray-600 rounded text-sm" />
            </div>
            <div>
              <label className="block text-gray-400 text-sm">Bio</label>
              <textarea value={bio} onChange={(e) => setBio(e.target.value)} className="w-full p-1 bg-gray-600 rounded text-sm" />
            </div>
            <div>
              <label className="block text-gray-400 text-sm">Pronouns</label>
              <input type="text" value={pronouns} onChange={(e) => setPronouns(e.target.value)} className="w-full p-1 bg-gray-600 rounded text-sm" />
            </div>
            <div>
              <label className="block text-gray-400 text-sm">E-mail</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-1 bg-gray-600 rounded text-sm" />
            </div>
            <div>
              <label className="block text-gray-400 text-sm">Location</label>
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-1 bg-gray-600 rounded text-sm" />
            </div>
            <div className="flex gap-2">
              <button type="submit" className="mt-2 w-full bg-blue-600 hover:bg-blue-500 text-white p-1 rounded text-sm">Submit</button>
              <button type="button" onClick={handleCancel} className="mt-2 w-full bg-red-600 hover:bg-red-500 text-white p-1 rounded text-sm">Cancel</button>
            </div>
          </form>
        )}
      </div>
      
      {/* Main Content - Cards */}
      <div className="w-3/4 p-6 flex flex-wrap gap-4 overflow-y-auto h-screen">
        {/* query-resolved Card */}
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-600 w-full md:w-2/5">
          <h3 className="text-xl font-bold mb-4">query-resolved</h3>
          <div className="p-4 bg-gray-700 rounded">
            <h4 className="text-blue-400">query-resolved</h4>
            <p className="text-gray-400">Maths</p>
            <span className="text-yellow-500 text-sm">● JavaScript</span>
          </div>
        </div>

        {/* query-unresolved Card */}
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-600 w-full md:w-2/5">
          <h3 className="text-xl font-bold mb-4">query-unresolved</h3>
          <div className="p-4 bg-gray-700 rounded">
            <h4 className="text-blue-400">query-unresolved</h4>
            <p className="text-gray-400">Maths</p>
            <span className="text-yellow-500 text-sm">● JavaScript</span>
          </div>
        </div>

        {/* Contribution Activity Card */}
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-600 w-full">
          <h3 className="text-xl font-bold mb-4">Problem Contribution Activity</h3>
          <ul className="mt-2">
            <li className="text-blue-400">physics</li>
            <li className="text-blue-400">data</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
