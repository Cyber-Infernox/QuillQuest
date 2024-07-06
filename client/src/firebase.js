// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "quillquest-b6422.firebaseapp.com",
  projectId: "quillquest-b6422",
  storageBucket: "quillquest-b6422.appspot.com",
  messagingSenderId: "132689076854",
  appId: "1:132689076854:web:76f1cca062a867f76d7557",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
