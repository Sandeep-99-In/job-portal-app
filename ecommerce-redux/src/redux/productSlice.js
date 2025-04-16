import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data;
})

//console.log(fetchProducts);


const productSlice = createSlice({
    name: 'product',
    initialState: {
        items: [],
        status: null,
    },

    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'success'
        })
        .addCase(fetchProducts.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

export default productSlice.reducer;