// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk6dWVNwZHGdEPXTQUbpW0nuBPnqsjZKc",
  authDomain: "instaclone-c0074.firebaseapp.com",
  projectId: "instaclone-c0074",
  storageBucket: "instaclone-c0074.appspot.com",
  messagingSenderId: "712861982782",
  appId: "1:712861982782:web:d68f437258838d87dab16f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore()
const storage = getStorage()

export {app,db,storage}