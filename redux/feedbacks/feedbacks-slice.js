import {
  fetchAllTextFeedbacks,
  sendNewFeedback,
  fetchBeforeAfterFeedbacks,
} from "./feedbacks-operations";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  textFeedbacks: [],
  newFeedback: {},
  beforeAfterFeedbacks: [],
  isLoading: false,
  error: false,
};
const feedbacksSlice = createSlice({
  name: "textFeedbacks",
  initialState,
  extraReducers: {
    [fetchAllTextFeedbacks.pending](state) {
      state.error = null;
      state.isLoading = true;
    },
    [fetchAllTextFeedbacks.fulfilled](state, action) {
      state.textFeedbacks = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchAllTextFeedbacks.rejected](state, action) {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [sendNewFeedback.pending](state) {
      state.error = null;
      state.isLoading = true;
    },
    [sendNewFeedback.fulfilled](state, action) {
      state.newFeedback = action.meta.arg;
      state.isLoading = false;
      state.error = null;
    },
    [sendNewFeedback.rejected](state, action) {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [fetchBeforeAfterFeedbacks.pending](state) {
      state.error = null;
      state.isLoading = true;
    },
    [fetchBeforeAfterFeedbacks.fulfilled](state, action) {
      state.beforeAfterFeedbacks = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchBeforeAfterFeedbacks.rejected](state, action) {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
export default feedbacksSlice.reducer;
