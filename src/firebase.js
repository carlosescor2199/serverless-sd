import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCxtvbO5DWbF3Xr_oanVRGZ1qs4ZpiJ0E8",
    authDomain: "serverlesssd.firebaseapp.com",
    databaseURL: "https://serverlesssd.firebaseio.com",
    projectId: "serverlesssd",
    storageBucket: "serverlesssd.appspot.com",
    messagingSenderId: "454301353558",
    appId: "1:454301353558:web:86281a41947493cbe39df7"
  };
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();