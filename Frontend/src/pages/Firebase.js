// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7p5ougqSXaLA05eeCSb0cjU2DLW2nC1s",
  authDomain: "ecommerce-app-4efb7.firebaseapp.com",
  projectId: "ecommerce-app-4efb7",
  storageBucket: "ecommerce-app-4efb7.appspot.com",
  messagingSenderId: "94235508442",
  appId: "1:94235508442:web:c6f0be3b9902d56b94afe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);