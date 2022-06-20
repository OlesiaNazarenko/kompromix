const getAllFeedbacks = (state) => state.feedbacks.textFeedbacks;
const getNewFeedback = (state) => state.feedbacks.newFeedback;
const getBeforeAfterFeedbacks = (state) => state.feedbacks.beforeAfterFeedbacks;
const feedbacksSelectors = {
  getAllFeedbacks,
  getNewFeedback,
  getBeforeAfterFeedbacks,
};
export default feedbacksSelectors;
