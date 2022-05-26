// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvWoYe-3Q7TQDyNoo7L_cz16p6ngcA25k",
  authDomain: "vacc-stat.firebaseapp.com",
  projectId: "vacc-stat",
  storageBucket: "vacc-stat.appspot.com",
  messagingSenderId: "371932038814",
  appId: "1:371932038814:web:49b0eaf623cbf42e6a9d8f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();