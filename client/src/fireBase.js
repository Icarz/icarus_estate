// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "icarus-estate.firebaseapp.com",
  projectId: "icarus-estate",
  storageBucket: "icarus-estate.firebasestorage.app",
  messagingSenderId: "308606806740",
  appId: "1:308606806740:web:95f128c10c4563518a2941",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
