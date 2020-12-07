//loads firebase namespace
import firebase from "firebase/app";
//loads services into firebase namespace
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoZVmZLKfIGswQOEo3DQ5hRFuuKivB5WY",
  authDomain: "cloth-app-6dca7.firebaseapp.com",
  projectId: "cloth-app-6dca7",
  storageBucket: "cloth-app-6dca7.appspot.com",
  messagingSenderId: "435161126727",
  appId: "1:435161126727:web:f75f03c1be80e471f25e62",
  measurementId: "G-WJCQWN6YJ7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
