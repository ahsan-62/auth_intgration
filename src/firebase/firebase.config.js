// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiwcxal8XOLW0NlpbVO4hrsnKLqudE8qw",
  authDomain: "auth-integration-d8282.firebaseapp.com",
  projectId: "auth-integration-d8282",
  storageBucket: "auth-integration-d8282.appspot.com",
  messagingSenderId: "330955417726",
  appId: "1:330955417726:web:6217ad2a2890a4548c102f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
