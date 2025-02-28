
import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex max-w-4xl rounded-lg bg-gray-800 shadow-lg">
        {/* Left Section */}
        <div className="w-1/2 p-6">
          <img
            src="https://source.unsplash.com/400x600/?landscape"
            alt="Gallery"
            className="rounded-lg"
          />
          <h2 className="mt-4 text-xl font-semibold text-white">
            Capturing Moments, Creating Memories
          </h2>
        </div>

        {/* Right Section - Form */}
        <div className="w-1/2 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Create an account
          </h2>
          <p className="mb-4 text-sm text-gray-400">
            Already have an account?{" "}
            <a href="#" className="text-blue-400">
              Log in
            </a>
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 rounded-md border border-gray-600 bg-gray-700 p-2 text-white focus:outline-none"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 rounded-md border border-gray-600 bg-gray-700 p-2 text-white focus:outline-none"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-white focus:outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-white focus:outline-none"
              required
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-gray-400">
                I agree to the{" "}
                <a href="#" className="text-blue-400">
                  Terms & Conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-purple-600 p-2 text-white hover:bg-purple-700"
            >
              Create Account
            </button>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <hr className="w-full border-gray-600" />
            <span className="px-2 text-gray-400">or register with</span>
            <hr className="w-full border-gray-600" />
          </div>
          <div className="mt-4 flex gap-4">
            <button className="w-1/2 rounded-md bg-gray-700 p-2 text-white hover:bg-gray-600">
              Google
            </button>
            <button className="w-1/2 rounded-md bg-gray-700 p-2 text-white hover:bg-gray-600">
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;