//Firebase Version 9

// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdDCeezYehgAmhZR6Mp7bIcR3-vmFENJA",
  authDomain: "instagram-clone-3aa4d.firebaseapp.com",
  projectId: "instagram-clone-3aa4d",
  storageBucket: "instagram-clone-3aa4d.appspot.com",
  messagingSenderId: "146370028544",
  appId: "1:146370028544:web:4165685b76d40ab6e0e4e5",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

const storage = getStorage();

export { app, db, storage };
