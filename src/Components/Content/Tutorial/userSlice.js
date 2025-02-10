import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "./fetchUsers";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, newData } = action.payload;
      const userIndex = state.users.findIndex((ind) => ind.id === id);
      if (userIndex !== -1) {
        state.users[userIndex] = { ...state.users[userIndex], ...newData };
      }
    },

    deleteUser: (state, action) => {
      const { id } = action.payload;
      state.users = state.users.filter((ind) => ind.id !== id);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        (state.status = "succeeded"), (state.users = action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.payload.error);
      });
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
