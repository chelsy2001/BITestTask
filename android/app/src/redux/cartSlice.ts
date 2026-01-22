import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../type/product';

type CartItem = Product & { qty: number };

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    increaseQty: (state, action: PayloadAction<number>) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.qty += 1;
    },
    decreaseQty: (state, action: PayloadAction<number>) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
