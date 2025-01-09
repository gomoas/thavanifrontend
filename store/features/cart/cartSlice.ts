import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  quantity: number;
  color: string;
  size: string;
}

export interface CounterState {
  items: CartItem[];
}

const initialState: CounterState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ id: string; color: string; size: string }>
    ) => {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      if (existingItem) {
        existingItem.quantity += 1; // If the item already exists, increase its quantity
      } else {
        state.items.push({
          id: action.payload.id,
          quantity: 1,
          color: action.payload.color,
          size: action.payload.size,
        });
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload); 
    },
    updateQuantity: (
      state,
      action: PayloadAction<{
        id: string;
        color: string;
        size: string;
        quantity: number;
      }>
    ) => {
      const item = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      if (item) {
        item.quantity += action.payload.quantity;
        if (item.quantity <= 0) item.quantity = 1; // Prevent the quantity from going below 1
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
