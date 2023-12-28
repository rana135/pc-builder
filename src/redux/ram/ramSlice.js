import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ramproducts: [],
};

const ramSlice = createSlice({
  name: "ram",
  initialState,
  reducers: {
    addToCartRam: (state, action) => {
      const exiting = state.ramproducts.find(
        (state) => state._id === action.payload._id
      );
      if (exiting) {
        exiting.quantity = exiting.quantity + 1;
      } else {
        state.ramproducts.push({ ...action.payload, quantity: 1 });
      }
    },
    /* removeFromCartRam: (state, action) => {
      state.ramproducts = state.ramproducts.filter(
        (product) => product._id !== action.payload._id
      );
    }, */
  },
});

export const { addToCartRam } = ramSlice.actions;
export default ramSlice.reducer;
