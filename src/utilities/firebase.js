// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Zp9CHdSlyX86UdDH0arLTY8INi8eWIA",
  authDomain: "nysl-app-ce0de.firebaseapp.com",
  projectId: "nysl-app-ce0de",
  storageBucket: "nysl-app-ce0de.appspot.com",
  messagingSenderId: "321571468319",
  appId: "1:321571468319:web:07c897b68cdc2a4aea112a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);