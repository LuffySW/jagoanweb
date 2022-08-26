// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import 'firebase/compat/firestore';;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyAmTsb5RlIfJ4vHSlc6tfyRntwtO5Jchcw",
  authDomain: "jagoanweb-391e9.firebaseapp.com",
  projectId: "jagoanweb-391e9",
  storageBucket: "jagoanweb-391e9.appspot.com",
  messagingSenderId: "259985879298",
  appId: "1:259985879298:web:fd7c9b78e3ec0ea5b5521b",
  measurementId: "G-C3VCM0FWRP"
});

export const GoogleAuth =  getAuth(app)
export const storage = getStorage(app)
// Initialize Firebase
export default app;
