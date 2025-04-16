import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../redux/productSlice';
import ProductCard from "./ProductCard";

function ProductList() {
    const dispatch = useDispatch()
    const {items, status} = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    if(status === 'loading') return <p className="text-center text-blue-500">Loading...</p>
    if(status === 'failed') return <p className="text-center text-blue-500">Error Loading Products!</p>

    return(
        <>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8"
            >{items.map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))}</div></>
    )
}

export default ProductList;