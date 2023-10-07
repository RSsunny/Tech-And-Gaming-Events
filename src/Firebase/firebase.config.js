// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA89RVGJFPkPpNlYOy_XxDQOaQIqlzgFcA",
  authDomain: "gaming-events-58368.firebaseapp.com",
  projectId: "gaming-events-58368",
  storageBucket: "gaming-events-58368.appspot.com",
  messagingSenderId: "933970813143",
  appId: "1:933970813143:web:3a91261be7e09d12499092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;