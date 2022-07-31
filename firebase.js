// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth  } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLf6fjPNW6Sk5MO_0437S7JXAHPc9qTLE",
  authDomain: "booknride-6bc25.firebaseapp.com",
  projectId: "booknride-6bc25",
  storageBucket: "booknride-6bc25.appspot.com",
  messagingSenderId: "749949478373",
  appId: "1:749949478373:web:d406dd82bb72a90ca7fb0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app,provider,auth}