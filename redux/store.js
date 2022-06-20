import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import projectsReducer from "./projects/projects-slice";
import feedbacksReducer from "./feedbacks/feedbacks-slice";
const projectsPersistConfig = {
  key: "projects",
  storage,
};
const feedbacksPersistConfig = {
  key: "feedbacks",
  storage,
};

export const store = configureStore({
  reducer: {
    projects: persistReducer(projectsPersistConfig, projectsReducer),
    feedbacks: persistReducer(feedbacksPersistConfig, feedbacksReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
