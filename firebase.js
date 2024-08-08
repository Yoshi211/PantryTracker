// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaTL6DvDC7hUw6aZTsXfABSPNZCTCdUFI",
  authDomain: "inventory-management-dff96.firebaseapp.com",
  projectId: "inventory-management-dff96",
  storageBucket: "inventory-management-dff96.appspot.com",
  messagingSenderId: "340617890480",
  appId: "1:340617890480:web:fceab7c4b943bd2762c975",
  measurementId: "G-CF3S657XHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};