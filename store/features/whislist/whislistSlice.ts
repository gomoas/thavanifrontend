import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WishlistItem = {
  id: string;
  name: string;
  price: string;
  image: string;
  color?: string;
  size?: string;
};

interface WishlistState {
  items: WishlistItem[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      // Ensure unique items by matching id, size, and color
      const exists = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (
      state,
      action: PayloadAction<{ id: string; size?: string; color?: string }>
    ) => {
      state.items = state.items.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.size !== action.payload.size ||
          item.color !== action.payload.color
      );
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
