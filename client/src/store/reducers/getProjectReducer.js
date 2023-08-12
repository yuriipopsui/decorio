import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

export const getProjectById = createAsyncThunk(
  'project/getProjectById',
  async (projectId) => {
    try {
     const res = await axios.get(`project/${projectId}`).then(res => res.data);
    //  console.log(res);
     return res;
    }
    catch (error) {
      throw new Error(error.message);
    }
  }
);

const initialState = {
  project: {},
  isLoading: false,
  error: null
};

const getProjectByIdSlice = createSlice({
  name: 'project',
  initialState,

  extraReducers: (builder) => {
    builder
    .addCase(getProjectById.pending, (state) => {
      state.status = 'loading';
      state.isLoading = true;
      // console.log(state.status);
    })
    .addCase(getProjectById.fulfilled, (state, action) => {
      state.status = "Success";
      state.isLoading = false;
      state.project = action.payload;
      // console.log(state.project);
      // console.log(state.status);
    })
    .addCase(getProjectById.rejected, (state, action) => {
      state.status = "Rejected & Faild";
      state.isLoading = false;
      state.error = action.error.message;
      // console.log(state.status);
    });
  }
});

export default getProjectByIdSlice.reducer;