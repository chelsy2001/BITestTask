import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const cartSlice = createSlice({
name: 'cart',
initialState: { items: [] as any[] },
reducers: {
addToCart: (state, action: PayloadAction<any>) => {
const item = state.items.find(i => i.id === action.payload.id);
if (item) item.qty += 1;
else state.items.push({ ...action.payload, qty: 1 });
},
removeFromCart: (state, action: PayloadAction<number>) => {
state.items = state.items.filter(i => i.id !== action.payload);
},
updateQty: (state, action) => {
const item = state.items.find(i => i.id === action.payload.id);
if (item) item.qty = action.payload.qty;
},
clearCart: state => { state.items = []; }
}
});


export const { addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;