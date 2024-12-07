import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Stores cart items
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if the item is already in the cart
      } else {
        state.items.push({ ...product, quantity: 1 }); // Add new item to the cart
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;