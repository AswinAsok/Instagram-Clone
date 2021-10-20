// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv7MmhY-WjWacNv4Hp4eHkQl-_5Q6u1Z4",
  authDomain: "instagram-clone-d542d.firebaseapp.com",
  projectId: "instagram-clone-d542d",
  storageBucket: "instagram-clone-d542d.appspot.com",
  messagingSenderId: "649516282996",
  appId: "1:649516282996:web:e71bfffee410a135d9cd21",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFireStore();
const storage = getStorage();

export {app, dv, storage};
