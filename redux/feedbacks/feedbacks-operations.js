import {
  getTextFeedbacks,
  addNewFeedback,
  getBeforeAfterFeedbacks,
} from "../../services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllTextFeedbacks = createAsyncThunk(
  "feedbacks/fetchAllTextFeedbacks",
  async (_, thunkAPI) => {
    try {
      const feedbacks = await getTextFeedbacks();
      return feedbacks;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendNewFeedback = createAsyncThunk(
  "feedbacks/sendNewFeedback",
  async (data, thunkAPI) => {
    try {
      const newFeedback = await addNewFeedback(data);
      return newFeedback;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchBeforeAfterFeedbacks = createAsyncThunk(
  "feedbacks/fetchBeforeAfterFeedbacks",
  async (_, thunkAPI) => {
    try {
      const feedbacks = await getBeforeAfterFeedbacks();
      return feedbacks;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
