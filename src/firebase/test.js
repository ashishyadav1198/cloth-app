import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("bu76LRXObwGOeILL4gIH")
  .collection("cartItems")
  .doc("S8rjpQ0M3fNvyOiM45Sv");
firestore.collection("users/bu76LRXObwGOeILL4gIH/cartItems");
firestore.doc("users/bu76LRXObwGOeILL4gIH/cartItems/S8rjpQ0M3fNvyOiM45Sv");
