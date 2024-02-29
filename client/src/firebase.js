// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-41d5b.firebaseapp.com",
  projectId: "mern-estate-41d5b",
  storageBucket: "mern-estate-41d5b.appspot.com",
  messagingSenderId: "650153882572",
  appId: "1:650153882572:web:860ef71c0851a330272369",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
