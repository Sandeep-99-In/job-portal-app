import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Register() {
    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        Password: "",
        Role: "job_seeker",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
                                       //this console is for check the form-submit button Log form data before sending the request
                                       //console.log("Form Data Sent:", formData);

        try {
            const response = await axios.post("https://job-portal-backend-production.up.railway.app/api/auth/register", 
                formData)

            if(response.status === 201){
                alert("Registration Successful!")
                navigate("/login")
            }
        } catch (error) {
            console.error("Error registering user: ", error)
        }
    }


    // //this is for using localStorage (if we don't have an api's then use this code for test the code)
    // const handleSubmit = (e) => {
    //     e.preventDefault();  // Fixed typo
    //     localStorage.setItem("user", JSON.stringify(formData)); // Save user data
    //     alert("Registration Successful");
    //     navigate("/login");  // Redirect to login page
    // };




    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">

            <h1 className="text-2xl font-semibold mb-6 text-center"
                >Registration Form
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <input 
                    type="text" 
                    placeholder="Name" 
                    name="Name" 
                    onChange={handleChange} 
                    value={formData.Name} 
                    required 
                    className="w-full p-2 border rounded-md outline-none focus:border-blue-500"/>
                </div>

                <div>
                    <input 
                    type="Email" 
                    placeholder="Email" 
                    name="Email" 
                    onChange={handleChange} 
                    value={formData.Email} 
                    required
                    className="w-full p-2 border rounded-md outline-none focus:border-blue-500" />
                </div>

                <div>
                    <input 
                    type="Password" 
                    placeholder="Password" 
                    name="Password" 
                    onChange={handleChange} 
                    value={formData.Password} 
                    required 
                    className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
                    />
                </div>

                <div>
                    <select 
                        className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
                        name="Role"
                        onChange={handleChange} 
                        value={formData.Role} >
                            <option value="job_seeker">Job seeker</option>
                            <option value="company_admin">Company Admin</option>
                    </select>
                </div>
 
                <button className="w-full bg-blue-500 text-white p-2 rounded-md 
                        hover:bg-blue-600"
                         type="submit"
                        >Register
                    </button>

                    <div className="text-center mt-4">
                    <p className="text-gray-600"
                        >Already have an account?
                    </p>

                    <button onClick={() => navigate("/login")}
                         className="mt-2 bg-green-500 text-white px-4 py-2 
                            rounded-md hover:bg-green-600 transition duration-200"
                            >Login
                    </button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Register;
