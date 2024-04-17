// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaanVgZjrKGC9B0oUpB9bqpyRqGfmPuTY",
  authDomain: "peso-4fb09.firebaseapp.com",
  projectId: "peso-4fb09",
  storageBucket: "peso-4fb09.appspot.com",
  messagingSenderId: "217221366215",
  appId: "1:217221366215:web:dfaa98a9dde751152d59e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
