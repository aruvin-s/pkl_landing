import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAx7r-FkuevuyTb7aSnkyYpxBAf3SdMMi0",
  authDomain: "prathamaland-aa589.firebaseapp.com",
  projectId: "prathamaland-aa589",
  storageBucket: "prathamaland-aa589.appspot.com",
  messagingSenderId: "937568242287",
  appId: "1:937568242287:web:90646e55d28be559badb9a",
  measurementId: "G-8FRVM4DWQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);