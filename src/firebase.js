// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCykMEmemos5S17lmDxssSRYzCS0Cas2u0",
  authDomain: "to-do-app-4b50c.firebaseapp.com",
  projectId: "to-do-app-4b50c",
  storageBucket: "to-do-app-4b50c.appspot.com",
  messagingSenderId: "19198455524",
  appId: "1:19198455524:web:cc46d14bc04de0c8ba06f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();