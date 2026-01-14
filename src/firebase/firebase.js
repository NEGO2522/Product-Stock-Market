// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  sendSignInLinkToEmail,
  isSignInWithEmailLink, 
  signInWithEmailLink
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
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
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Configure the authentication persistence
auth.setPersistence('local');

// Email link configuration
const actionCodeSettings = {
  // URL you want to redirect back to after email sign in
  url: window.location.origin + '/complete-signin',
  // This must be true for email link sign-in
  handleCodeInApp: true,
};

export { 
  auth, 
  app, 
  googleProvider, 
  signInWithPopup, 
  sendSignInLinkToEmail, 
  isSignInWithEmailLink, 
  signInWithEmailLink,
  actionCodeSettings,
  db
};