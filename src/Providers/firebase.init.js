import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCxNRAKDSXyebXeb5MUFZCkCYYp73cxLmk",
  authDomain: "hirenest-ac525.firebaseapp.com",
  projectId: "hirenest-ac525",
  storageBucket: "hirenest-ac525.firebasestorage.app",
  messagingSenderId: "752683993814",
  appId: "1:752683993814:web:6fd64d72fc045c7fd6d777"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

