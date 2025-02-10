import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Components/Content/Tutorial/counterSlice";
import cartReducer from "./Components/Content/Cart/cartSlice";
// import cartReducer from "../src/Components/Content/Cart/cartSlice";
import authReducer from "./Components/Header/Auth/authSlice";
import userReducer from "./Components/Content/Tutorial/userSlice";

export default configureStore({
  reducer: {
    counteri: counterReducer,
    cart: cartReducer,
    auth: authReducer,
    user: userReducer,
  },
});
