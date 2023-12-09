import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import Alert from "./Alert";

const Login = () => {
  const [credentials, setCredentials] = useState({ email : "", password: "" });
  let navigate=useNavigate()
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      //Redirect the user to His/her notes page.
      localStorage.setItem('token',json.authtoken);
      navigate('/');
    }
    else{
      alert('Invalid credentials!');
     
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full sm:w-96 container my-14">
          <h1 className="text-3xl font-semibold text-center mb-6 text-purple-600">
            Log In 
          </h1>
          <form onSubmit={handleLoginSubmit} className="space-y-4" >
            <div>
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                
                type="email"
                name="email"
                id="email"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300"
                placeholder="Enter your email"
                value={credentials.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                onChange={handleChange}
                name="password"
                type="password"
                id="password"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300"
                placeholder="Enter your password"
                value={credentials.password}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white rounded-lg py-2 hover:bg-purple-700 transition duration-300"
            >
              Log In
            </button>
          </form>
          <p className="text-gray-600 mt-4 text-center">
            Don't have an account?{" "}
            <a
              href="/createaccount"
              className="text-purple-600 hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
