import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [loginData, setLoginData] = useState({ 
        Email: "", 
        Password: "" 
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();                                // Prevent default form submission

        try {
            const response = await axios.post(
                "https://job-portal-backend-production.up.railway.app/api/auth/login",
                loginData                                  // No need for headers, Axios sets them automatically
            );

            const data = response.data;

            if (response.status === 200) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                alert("Login Successful!");
                navigate("/dashboard");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Login error:", error);
            alert(error.response?.data?.message || "Login failed! Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-green-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-semibold mb-6 text-center text-gray-700">Login</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input 
                            type="email" 
                            onChange={handleChange} 
                            value={loginData.Email}  
                            name="Email" 
                            placeholder="Email" 
                            required 
                            className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <input 
                            type="password" 
                            onChange={handleChange} 
                            value={loginData.Password}  
                            name="Password" 
                            placeholder="Password" 
                            required 
                            className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>

                    <div className="text-center mt-4">
                        <p className="text-gray-600">Don't have an account?</p>
                        <button 
                            onClick={() => navigate("/")}
                            className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
