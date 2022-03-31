import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_DB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_DB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_DB_STORAGE_BASKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_DB_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_DB_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_DB_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);
export default db;
