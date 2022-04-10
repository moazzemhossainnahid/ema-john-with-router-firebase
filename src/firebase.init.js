// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLGpYgrKODvNUmLrd6BYRjjS1aGk3YkOg",
  authDomain: "ema-john-with-router-ce26a.firebaseapp.com",
  projectId: "ema-john-with-router-ce26a",
  storageBucket: "ema-john-with-router-ce26a.appspot.com",
  messagingSenderId: "737691913041",
  appId: "1:737691913041:web:23436a57f471a3b3b82170"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;