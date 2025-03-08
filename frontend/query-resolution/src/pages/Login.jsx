
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    try {
      const response = await axios.post("http://localhost:8080/askSphere/api/v1/auth/login", formData);
      alert("Login successful!");
      localStorage.setItem("token", response.data.jwtToken);
      console.log(localStorage.getItem("token"));
    } catch (error) {
      console.error(error.response.data);
      alert("Login failed. Check credentials.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="flex max-w-4xl rounded-lg bg-gray-800 shadow-lg">
        {/* Left Section */}
        <div className="w-1/2 p-6">
          {/* <img
            src="https://source.unsplash.com/400x600/?abstract"
            alt="Gallery"
            className="rounded-lg"
          /> */}
          <h2 className="mt-4 text-xl font-semibold text-white">
            Welcome Back!
          </h2>
        </div>

        {/* Right Section - Form */}
        <div className="w-1/2 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">Login</h2>
          <p className="mb-4 text-sm text-gray-400">
            Don't have an account?{" "}
            <a href="#" className="text-blue-400">
              Sign Up
            </a>
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <div className="flex justify-between text-gray-400">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <a href="#" className="text-blue-400">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-purple-600 p-2 text-white hover:bg-purple-700"
            >
              Login
            </button>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <hr className="w-full border-gray-600" />
            <span className="px-2 text-gray-400">or login with</span>
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

export default Login;
