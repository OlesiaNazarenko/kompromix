import { getServerSideProps } from "../../pages/projects/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProjects } from "../../services/api";
export const fetchAllProjects = createAsyncThunk(
  "projects/fetchAllProjects",
  async (_, thunkAPI) => {
    try {
      const projects = await getProjects();
      return projects;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
