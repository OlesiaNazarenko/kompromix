import { fetchAllProjects } from "./projects-operations";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  projects: [],
  isLoading: false,
  error: false,
};
const projectsSlice = createSlice({
  name: "projects",
  initialState,
  extraReducers: {
    [fetchAllProjects.pending](state) {
      state.error = null;
      state.isLoading = true;
    },
    [fetchAllProjects.fulfilled](state, action) {
      state.projects = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchAllProjects.rejected](state, action) {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
export default projectsSlice.reducer;
