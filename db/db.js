import { FirebaseApp, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCf8zFgjVj1nvttoR-d556JPe69c0SL3fE",
  authDomain: "kompromix.firebaseapp.com",
  projectId: "kompromix",
  storageBucket: "kompromix.appspot.com",
  messagingSenderId: "601626901306",
  appId: "1:601626901306:web:02140dc051631b8453ae03",
  measurementId: "G-9F0G8KT09F",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
