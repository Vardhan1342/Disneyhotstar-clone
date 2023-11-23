// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK1yrb1YoJjEo9mZIYfP7yKLSKn9faaTY",
  authDomain: "disney-plus-4d558.firebaseapp.com",
  projectId: "disney-plus-4d558",
  storageBucket: "disney-plus-4d558.appspot.com",
  messagingSenderId: "616077394852",
  appId: "1:616077394852:web:c1f10bb44f202449f4b731",
  measurementId: "G-9QST3L9R9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database=getFirestore();
const auth=getAuth()
const provider=new GoogleAuthProvider();

export {provider,database};
export default auth;