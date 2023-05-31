import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  reducers: {
    addOrderItem: (state, action) => {
      state.push(action.payload);
    },
    deleteOrderItem: (state, action) => {
      state = state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addOrderItem, deleteOrderItem } = orderSlice.actions;

export default orderSlice.reducer;
