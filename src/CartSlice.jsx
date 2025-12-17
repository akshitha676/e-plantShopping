import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(i => i.name === action.payload.name);
      if (existingItem) existingItem.quantity += 1;
      else state.items.push({ ...action.payload, quantity: 1 });
    },
    increase: (state, action) => {
      const item = state.items.find(i => i.name === action.payload);
      if (item) item.quantity += 1;
    },
    decrease: (state, action) => {
      const item = state.items.find(i => i.name === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    remove: (state, action) => {
      state.items = state.items.filter(i => i.name !== action.payload);
    },
  },
});

export const { addItem, increase, decrease, remove } = cartSlice.actions;
export default cartSlice.reducer;
