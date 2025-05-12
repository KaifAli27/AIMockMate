import { getAuth } from 'firebase/auth';
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDDvZ9oerOyspljCyvkLOr1y7jxJcwWOd8",
    authDomain: "mockmate-97be0.firebaseapp.com",
    projectId: "mockmate-97be0",
    storageBucket: "mockmate-97be0.firebasestorage.app",
    messagingSenderId: "160920169596",
    appId: "1:160920169596:web:49afa2419cce52cee32df9",
    measurementId: "G-D5LPF0T3NM"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig)  : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);