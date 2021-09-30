// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBoi6k2WECkPmPyM1u0mdmeTItLsKqTbHY",
    authDomain: "elevatorasync.firebaseapp.com",
    projectId: "elevatorasync",
    storageBucket: "elevatorasync.appspot.com",
    messagingSenderId: "152743949114",
    appId: "1:152743949114:web:3ba4d3dc849333f81e1603"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


