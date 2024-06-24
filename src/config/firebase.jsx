import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYJAmmdowUU4UKajObBdeV0WyVssKCkJI",
  authDomain: "tripplex-e192a.firebaseapp.com",
  projectId: "tripplex-e192a",
  storageBucket: "tripplex-e192a.appspot.com",
  messagingSenderId: "400821604602",
  appId: "1:400821604602:web:3e89e5a5ca63753332f943",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage(app);
