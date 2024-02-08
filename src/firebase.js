// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCFNOQhxPquyYqhPST0IS15YOU-HDNuPKU",
  authDomain: "login-register-9627d.firebaseapp.com",
  projectId: "login-register-9627d",
  storageBucket: "login-register-9627d.appspot.com",
  messagingSenderId: "1007004478308",
  appId: "1:1007004478308:web:ad96862d3f18ae48066871",
  measurementId: "G-8Z2CG1937N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();



export {app,auth}