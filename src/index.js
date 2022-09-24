import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6motQmI8w4oBF5ZdJjamvNQgDChyQmrk",
  authDomain: "paul-43ab7.firebaseapp.com",
  projectId: "paul-43ab7",
  storageBucket: "paul-43ab7.appspot.com",
  messagingSenderId: "1035931729542",
  appId: "1:1035931729542:web:599cdda336f329a455db07",
  measurementId: "G-0B1C3GT2JE"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

