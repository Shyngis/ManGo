import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated"), // Check localStorage for initial state
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const role = action.payload; // "admin" or "user"
      if (role === "admin" || role === "user") {
        state.isAuthenticated = role;
        localStorage.setItem("isAuthenticated", role); // Persist login state with role
      } else {
        console.error("Invalid role: must be 'admin' or 'user'");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated"); // Remove persisted state
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
