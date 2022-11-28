// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import * as firebase from "firebase";
import { initializeApp }  from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";


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
let app;
if(firebase.apps.length === 0) {
    // app = firebase.initializeApp(firebaseConfig);
    app = firebase.initializeApp(firebaseConfig);

} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };


