import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyWN4_5Cncey9dIVPiP3g-_EmcsyxLcvI",
  authDomain: "chat-12d6b.firebaseapp.com",
  projectId: "chat-12d6b",
  storageBucket: "chat-12d6b.appspot.com",
  messagingSenderId: "1041078036317",
  appId: "1:1041078036317:web:960c76257aa3361b132ab4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
