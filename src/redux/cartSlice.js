import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartIsShown: false,
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.cartIsShown = !state.cartIsShown;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          total: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.total += newItem.price;
      }
    },
    removeItem(state, action) {
      const itemId = action.payload;
      state.totalQuantity--;
      const existingItem = state.items.find((item) => item.id === itemId);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
