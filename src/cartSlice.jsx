// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // You can store cart items here
  },
  reducers: {
    addToCart: (state, action) => {
      // Add the product to the cart
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      // Remove a product from the cart
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
