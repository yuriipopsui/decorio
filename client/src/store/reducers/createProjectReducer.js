import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

export const createProject = createAsyncThunk(
  'project/createProject',
  async (newObject) => {
    try {
      const res = await axios.post('project', newObject)
      .then(res => res.data);
      return res;
    }
    catch (err) {
      throw new Error(err.message);
    }
  }
);

const initialState = {
  project: {},
  isLoading: false,
  error: null
}

const createProjectSlice = createSlice({
  name: 'newProject',
  initialState,

  extraReducers: (builder) => {
    builder
    .addCase(createProject.pending, (state) => {
      state.status = 'Loading';
      state.isLoading = true;
      console.log(state.status);
    })
    .addCase(createProject.fulfilled, (state, action) => {
      state.status = "Success";
      state.project = action.payload;
      console.log(state.project);
      state.isLoading = false;
      state.error = null;
      console.log(state.status);
    })
    .addCase(createProject.rejected, (state, action) => {
      state.status = 'Rejected & Failed';
      state.isLoading = false;
      state.error = action.error.message;
    });
  }
});

export default createProjectSlice.reducer;