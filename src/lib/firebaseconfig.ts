import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKYbxYz6qZAfPPc00UXSjrJjiTh85vIjQ",
  authDomain: "food-dc0c9.firebaseapp.com",
  projectId: "food-dc0c9",
  storageBucket: "food-dc0c9.appspot.com",
  messagingSenderId: "98456173406",
  appId: "1:98456173406:web:4a6696826376f2bf6b2dcf",
  measurementId: "G-TNQ56T3PHM",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
