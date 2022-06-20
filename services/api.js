import db from "../db/db";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

export const getProjects = async () => {
  let projects;
  const getProjectsGalleryItems = await getDocs(
    collection(db, "projectsPageGallery")
  );
  getProjectsGalleryItems.forEach((doc) => {
    projects = Array(36).fill(doc.data().projects);
  });
  return projects.flat();
};

export const getTextFeedbacks = async () => {
  const docRefTextFeedback = doc(db, "textFeedbacks", "cZ5jic90iXSFu7Ds9rIF");
  const getFeedbacksItems = await getDoc(docRefTextFeedback);
  let feedbacks;
  feedbacks = getFeedbacksItems.data().feedbacks;
  return feedbacks.flat();
};

export const addNewFeedback = async (data) => {
  const feedbackRef = doc(db, "textFeedbacks", "cZ5jic90iXSFu7Ds9rIF");
  const newFeedback = await updateDoc(feedbackRef, {
    feedbacks: arrayUnion({
      date: data.date,
      feedbackText: data.feedback,
      rate: data.rate,
      userName: data.name,
      userNumber: data.number,
      email: data.email,
    }),
  });
  return newFeedback;
};

export const getBeforeAfterFeedbacks = async () => {
  let feedbackItem = [];
  const getFeedbacks = await getDocs(collection(db, "textFeedbacks"));
  getFeedbacks.forEach((doc) => {
    feedbackItem = Array(10).fill(doc.data().slides);
  });
  return feedbackItem;
};
