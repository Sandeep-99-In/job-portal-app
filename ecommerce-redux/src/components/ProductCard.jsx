import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({product}) {
    const dispatch = useDispatch()

    return(
        <>
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white flex flex-col items-center">
            <img src={product.image} alt={product.title} width="100" className="w-32 h-32 object-contain mb-4"/>
            <h3 className="font-semibold text-lg text-center">{product.title}</h3>
            <p className="text-gray-600 my-2">${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))} className="bg-gray-300 rounded-md px-2">Add to Cart</button>
        </div>
        </>
    )
}

export default ProductCard;