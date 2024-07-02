// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7ch7-H7Kcqu7dLFrN7z77y2zwA3fiVBY",
  authDomain: "netflix-96267.firebaseapp.com",
  projectId: "netflix-96267",
  storageBucket: "netflix-96267.appspot.com",
  messagingSenderId: "28885968312",
  appId: "1:28885968312:web:770dc2e989b01e400a9b4d",
  measurementId: "G-1PVT0DLVT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();