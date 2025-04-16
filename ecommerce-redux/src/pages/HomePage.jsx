import React from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

function HomePage() {

    return(
        <>
        <div className="bg-gray-50 min-h-screen">
            <Header/>
            <ProductList/>
        </div>
        </>
    )
}

export default HomePage;