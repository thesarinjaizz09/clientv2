// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-3mCEcDGUv-ibl2vrEX4NrWFZMgvvEBg",
  authDomain: "nctedge-b8160.firebaseapp.com",
  projectId: "nctedge-b8160",
  storageBucket: "nctedge-b8160.appspot.com",
  messagingSenderId: "447534880315",
  appId: "1:447534880315:web:1838a231ed88e23158ee1e",
  measurementId: "G-N60B1WZRFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

