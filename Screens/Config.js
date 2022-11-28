// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMfsjEQGldg-vcR4wOCy9Z-TF6jGctvmE",
  authDomain: "fir-auth-564d4.firebaseapp.com",
  projectId: "fir-auth-564d4",
  storageBucket: "fir-auth-564d4.appspot.com",
  messagingSenderId: "854440958812",
  appId: "1:854440958812:web:e2fad71441d63ce657ff99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);