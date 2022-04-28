// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDaGEJyATyuvmwF8uJOG1ku4u7URpXuEek",
  authDomain: "chatappbasic-67d2b.firebaseapp.com",
  projectId: "chatappbasic-67d2b",
  storageBucket: "chatappbasic-67d2b.appspot.com",
  messagingSenderId: "337547503143",
  appId: "1:337547503143:web:8a30b68627f1b7f850d002"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

export { auth,db }