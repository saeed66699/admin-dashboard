// store.js
import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './tableSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    table: tableReducer,
    cart: cartReducer,
  },
});

export default store;
