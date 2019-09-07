import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDALnRV-D5FXd1Y108njxTQPbXOjckN8yw",
  authDomain: "react-firebase-blog-f768e.firebaseapp.com",
  databaseURL: "https://react-firebase-blog-f768e.firebaseio.com",
  projectId: "react-firebase-blog-f768e",
  storageBucket: "",
  messagingSenderId: "542268719092",
  appId: "1:542268719092:web:394acc5ae77e45da9f83a1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
