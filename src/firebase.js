// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3pv5rP-Awk_VojSU2hmXhltrPEbY9A80",
  authDomain: "aiwardrobe-ded7d.firebaseapp.com",
  projectId: "aiwardrobe-ded7d",
  storageBucket: "aiwardrobe-ded7d.appspot.com",
  messagingSenderId: "251390804991",
  appId: "1:251390804991:web:f87adac49f53e26c3eddca",
  measurementId: "G-WW2LNLF34H"
};



// Initialize Firebase
export  const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);