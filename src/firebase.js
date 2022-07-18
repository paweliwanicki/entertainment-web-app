// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
} from "firebase/auth";
import {
  getFirestore,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsfpLliMN-t72RNJprI35JpIF2f5amW54",
  authDomain: "entertainment-web-app-cf030.firebaseapp.com",
  projectId: "entertainment-web-app-cf030",
  storageBucket: "entertainment-web-app-cf030.appspot.com",
  messagingSenderId: "668622607368",
  appId: "1:668622607368:web:e443691da938de70ae6dbd",
  measurementId: "G-DXL9YNS28Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
