import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "../src/Counter/counterSlice";
import cartReducer from "./Components/Content/Cart/cartSlice";
// import cartReducer from "../src/Components/Content/Cart/cartSlice";
import authReducer from "./Components/Header/Auth/authSlice";

export default configureStore({
  reducer: {
    counter: counterReduce,
    cart: cartReducer,
    auth: authReducer,
  },
});
