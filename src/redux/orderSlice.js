import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: { items: [] },
  reducers: {
    addOrderItem: (state, action) => {
      const existingItem = state.items.find(
        item => item.name === action.payload.name
      );

      if (existingItem) {
        existingItem.amount += 1;
        existingItem.price += action.payload.price;
      } else {
        const newItem = { ...action.payload, amount: 1 };
        state.items.push(newItem);
      }
    },

    deleteOrderItem: (state, action) => {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    },
  },
});

export const { addOrderItem, deleteOrderItem } = orderSlice.actions;

export default orderSlice.reducer;
