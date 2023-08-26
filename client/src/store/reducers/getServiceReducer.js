import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

export const getServices = createAsyncThunk(
  'services/getServices',
  async () => {
    try {
      const res = await axios.get('service');
      console.log(res.data);
      return res.data;
    }
    catch (err) {
      throw new Error(err.message);
    }
  }
);

const initialState = {
  services: {},
  isLoading: false,
  status: ''
}

const getServicesSlice = createSlice({
  name: 'services',
  initialState,

  extraReducers: (builder) => {
    builder
    .addCase(getServices.pending, (state) => {
      state.status = 'loading services';
      state.isLoading = true;
      console.log(state.status);
    })
    .addCase(getServices.fulfilled, (state, action) => {
      state.status = 'loading successful';
      state.isLoading = false;
      state.services = action.payload;
      console.log(state.status);
      console.log(state.services);
    })
    .addCase(getServices.rejected, (state, action) => {
      state.status = 'Rejected & Failed';
      state.isLoading = false;
      state.error = action.error.message;
    })
  }
});

export default getServicesSlice.reducer;