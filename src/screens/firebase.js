// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBLMS-l8mYHj6iPBp8u--pwqtrbJ20Tudw",
  authDomain: "myapp-8037c.firebaseapp.com",
  projectId: "myapp-8037c",
  storageBucket: "myapp-8037c.appspot.com",
  messagingSenderId: "310711854239",
  appId: "1:310711854239:web:2d4617cb709275e8266eaa"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
