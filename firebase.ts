// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApx_sgnhiinvjsYn0pXKl0Qs3PXXhnis4",
  authDomain: "netflix-clone-d9085.firebaseapp.com",
  projectId: "netflix-clone-d9085",
  storageBucket: "netflix-clone-d9085.appspot.com",
  messagingSenderId: "702660946005",
  appId: "1:702660946005:web:d4dc1fa3ad1abc4c1c0cdc",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
