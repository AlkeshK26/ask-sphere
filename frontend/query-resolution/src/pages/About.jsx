import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-2xl rounded-3xl p-10 text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
          About Query Resolution System
        </h1>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          The <span className="font-semibold">Query Resolution System</span> is a web-based platform designed to streamline query 
          submission, tracking, and resolution. Built with the <span className="font-semibold">MERN stack</span>, it ensures 
          seamless and efficient query management.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800">Key Features</h2>
        <ul className="mt-4 text-gray-700 text-left space-y-4">
          <li className="p-3 bg-gray-100 rounded-xl shadow-sm">
            ✅ <span className="font-semibold">User-Friendly Interface</span> – Easily submit and browse queries.
          </li>
          <li className="p-3 bg-gray-100 rounded-xl shadow-sm">
            ✅ <span className="font-semibold">Efficient Query Management</span> – Track, update, and resolve queries seamlessly.
          </li>
          <li className="p-3 bg-gray-100 rounded-xl shadow-sm">
            ✅ <span className="font-semibold">Real-Time Updates</span> – Get instant notifications for responses.
          </li>
          <li className="p-3 bg-gray-100 rounded-xl shadow-sm">
            ✅ <span className="font-semibold">Multimedia Support</span> – Upload images/docs using <span className="font-semibold">Multer</span>.
          </li>
          <li className="p-3 bg-gray-100 rounded-xl shadow-sm">
            ✅ <span className="font-semibold">Scalability & Performance</span> – Handles large query volumes efficiently.
          </li>
        </ul>

        <p className="mt-6 text-gray-700 text-lg">
          This system is ideal for <span className="font-semibold">educational institutions, customer support teams, technical forums, and corporate helpdesks</span>, 
          providing a structured and efficient query resolution process.
        </p>
      </div>
    </div>
  );
};

export default About;