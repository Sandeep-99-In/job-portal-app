import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-gray-700 text-center mb-4">
          Dashboard
        </h2>

        {user ? (
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700"><strong>UserID:</strong> {user.UserID}</p>
            <p className="text-lg text-gray-700"><strong>Name:</strong> {user.Name}</p>
            <p className="text-lg text-gray-700"><strong>Email:</strong> {user.Email}</p>
            <p className="text-lg text-gray-700"><strong>Role:</strong> {user.Role}</p>
          </div>
        ) : (
          <p className="text-center text-gray-600">No user logged in.</p>
        )}

        <button
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            navigate("/login");
          }}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-md text-lg 
                     hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
