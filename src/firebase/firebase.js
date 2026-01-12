// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmR8q02K4WRhKU8DgjfYRSw9DgJ5WQGfE",
  authDomain: "money-9ba25.firebaseapp.com",
  projectId: "money-9ba25",
  storageBucket: "money-9ba25.firebasestorage.app",
  messagingSenderId: "588372649710",
  appId: "1:588372649710:web:926fc2e1a339aa431eb5ff",
  measurementId: "G-4MXGP423L8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);