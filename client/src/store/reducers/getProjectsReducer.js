import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

export const getProjects = createAsyncThunk(
  'projects/getAllProjects',
   async () => {
    try {
      const res = await axios.get('projects');
      console.log(res.data);
      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
);

const initialState = {
  projects: [],
  isLoading: false,
  // status: '',
  error: null
}

const getProjectsSlice = createSlice({
  name: 'projects',
  initialState,
  
  extraReducers: (builder) => {
    builder
    .addCase(getProjects.pending, (state) => {
      state.status = 'loading';
      state.isLoading = true;
      console.log(state.status);
    })
    .addCase(getProjects.fulfilled, (state, action) => {
      state.status = 'Succeeded';
      state.projects = action.payload;
      console.log(state.projects);
      state.isLoading = false;
      state.error = null;
      console.log(state.status);
    })
    .addCase(getProjects.rejected, (state, action) => {
      state.status = 'Rejected & Failed';
      state.isLoading = false;
      state.error = action.error.message;
    });
  }
});

export default getProjectsSlice.reducer;
