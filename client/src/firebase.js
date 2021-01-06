import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8SF24qNPzE4hL6YpSVuo5oG6DZKGwpB0",
  authDomain: "ecommerce-5262b.firebaseapp.com",
  projectId: "ecommerce-5262b",
  storageBucket: "ecommerce-5262b.appspot.com",
  messagingSenderId: "389434449302",
  appId: "1:389434449302:web:3c0c9beebb5580269951b7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
