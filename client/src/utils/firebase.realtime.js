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

const firebaseConfigCommunity = {
  apiKey: "AIzaSyCFtn4hu0r8I4fNPp3zsbHJPd_qDGKSjcs",
  authDomain: "peso-community.firebaseapp.com",
  projectId: "peso-community",
  storageBucket: "peso-community.appspot.com",
  messagingSenderId: "959877442349",
  appId: "1:959877442349:web:500050af1b26f85ee201a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, "chat");
const community_app = initializeApp(firebaseConfigCommunity, "community");

export const db = getDatabase(app);
export const community_db = getDatabase(community_app);
