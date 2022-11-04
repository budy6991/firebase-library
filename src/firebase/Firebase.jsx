// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDE5Gc7qRIufxYzbAqfDNHx9FjDNDofgqM",
  authDomain: "library-d9cbd.firebaseapp.com",
  databaseURL:
    "https://library-d9cbd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "library-d9cbd",
  storageBucket: "library-d9cbd.appspot.com",
  messagingSenderId: "980158108361",
  appId: "1:980158108361:web:cce81f7fb3ead0e239b318",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
