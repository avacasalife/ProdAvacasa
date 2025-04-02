"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }
  
      console.log("Login successful:", data);
      localStorage.setItem("token", data.token); // Store the token
  
      router.push("/"); // Redirect after login
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Login
          </button>
        </form>

   
        <div className="flex items-center my-4 md:my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm md:text-base">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>


        <div className="text-center mt-2 md:mt-4">
          <button className="w-full flex items-center justify-center gap-1 md:gap-2 bg-blue-700 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-500 transition duration-300">
            Login with Google
          </button>
        </div>


        <div className="flex flex-row items-center justify-center font-semibold py-3 text-sm md:text-base">
          <span>Don't have an account ?</span>
          <button
            className="text-blue-500 hover:underline pl-1"
            onClick={() => router.push("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
