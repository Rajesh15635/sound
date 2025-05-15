// src/component/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA54xpBPIrk2hNewgYVc_FvQ8CTkEZnTSo",
  authDomain: "roman2004.firebaseapp.com",
  projectId: "roman2004",
  storageBucket: "roman2004.appspot.com",
  messagingSenderId: "541350660055",
  appId: "1:541350660055:web:6a75ded08698a606e3ed92",
  measurementId: "G-BFN7FPNRVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Authentication instance
export const auth = getAuth(app);

export default app;