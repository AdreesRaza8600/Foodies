import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import CateogarySlice from "./Slices/CateogarySlice";
import searchSlice from "./Slices/SearchSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CateogarySlice,
    search: searchSlice,
  },
});

export default store;
