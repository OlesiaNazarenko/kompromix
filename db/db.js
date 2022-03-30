import { FirebaseApp, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_DB_API_KEY,
  authDomain: process.env.FIREBASE_DB_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_DB_PROJECT_ID,
  storageBucket: process.env.FIREBASE_DB_STORAGE_BASKET,
  messagingSenderId: process.env.FIREBASE_DB_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_DB_APP_ID,
  measurementId: process.env.FIREBASE_DB_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
