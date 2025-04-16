import React from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";

function CartPage() {

    return(
        <>
            <div className="bg-gray-50 min-h-screen">
                <Header/>
                <Cart/>
            </div>
        </>
    )
}

export default CartPage;