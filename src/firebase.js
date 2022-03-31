// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfhWdnbpzrIzXG3IK93Pq05IOts0tWPns",
  authDomain: "malags-market.firebaseapp.com",
  projectId: "malags-market",
  storageBucket: "malags-market.appspot.com",
  messagingSenderId: "346205870417",
  appId: "1:346205870417:web:549f4ec4a8daf464ea9b70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();