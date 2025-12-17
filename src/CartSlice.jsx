import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Cart items stored as an array
  },
  reducers: {
    addItem: (state, action) => {
      // Add new item to the cart
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (!existingItem) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        // If already in cart, increase quantity
        existingItem.quantity += 1;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
