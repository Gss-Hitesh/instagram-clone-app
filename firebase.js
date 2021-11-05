// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe5AzBp7vPTAzJpwWEx54tHyscCxT-pww",
  authDomain: "instagram-2-4087f.firebaseapp.com",
  projectId: "instagram-2-4087f",
  storageBucket: "instagram-2-4087f.appspot.com",
  messagingSenderId: "154250534503",
  appId: "1:154250534503:web:b8e23e8c9c116c018a7ec2",
  measurementId: "G-FM4EPXB04Y"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp() ;
const db = getFirestore() ;
const storage = getStorage() ;

export {app, db, storage} ;