// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjqvMtvRSXqJSeI2_MAyZFmmCQyQe9JCg",
  authDomain: "react-cursos-ecbd6.firebaseapp.com",
  projectId: "react-cursos-ecbd6",
  storageBucket: "react-cursos-ecbd6.appspot.com",
  messagingSenderId: "953900171878",
  appId: "1:953900171878:web:2bedfcd91d65c06ba4a3a7"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp ); //autenticacion
export const FirebaseDB   = getFirestore( FirebaseApp );