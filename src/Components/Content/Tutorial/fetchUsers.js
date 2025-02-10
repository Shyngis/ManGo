import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3000/users");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Ne udalos' download users");
    }
  }
);
