import { createSlice } from "@reduxjs/toolkit";

const CateogarySlice = createSlice({
  name: "category",
  initialState: {
    category: "All",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const {setCategory} = CateogarySlice.actions

export default CateogarySlice.reducer
