import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const authSlice = createSlice({
name: 'auth',
initialState: { user: null },
reducers: {
login: (state, action: PayloadAction<any>) => { state.user = action.payload; },
logout: state => { state.user = null; }
}
});


export const { login, logout } = authSlice.actions;
export default authSlice.reducer;