// Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import your cart slice reducer
import cartReducer from './CartSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // 'cart' slice will be managed by cartReducer
  },
});

// Export the store for use in your app
export default store;
