// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxBTnr2lEHlrQhWvGLzivDBWj9AE2XB5k",
    authDomain: "simple-firebase-auth-web.firebaseapp.com",
    projectId: "simple-firebase-auth-web",
    storageBucket: "simple-firebase-auth-web.firebasestorage.app",
    messagingSenderId: "154774385654",
    appId: "1:154774385654:web:fabfbe249c15e76acacdd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export   const auth = getAuth(app);