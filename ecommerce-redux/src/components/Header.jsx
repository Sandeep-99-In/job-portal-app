import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function Header() {
    const cart = useSelector((state) => state.cart.cartItems);

    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <div  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
            <h2 className="text-2xl font-bold text-blue-600">E-Commerce Store</h2>
            </div>

            <nav className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                <div>
                    <Link to="/" >Home</Link>
                </div>
            </nav>
                
            <nav>
                <div className="text-gray-600 hover:text-blue-600 transition ">
                    <Link to="/cart">Cart ({cart.length})</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
