import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Cart items stored as an array
  },
  reducers: {
    // ✅ Add item to cart
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (!existingItem) {
        // If item not in cart, add with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        // If item already in cart, increase quantity
        existingItem.quantity += 1;
      }
    },

    // ✅ Remove item from cart
    removeItem: (state, action) => {
      // Filter out the item based on name
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },

    // ✅ Update quantity of a specific item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Extract name and new quantity
      const item = state.items.find(item => item.name === name);
      if (item) {
        item.quantity = quantity; // Update quantity
      }
    },
  },
});

// Export actions for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer for store.js
export default CartSlice.reducer;
