import firebase from "firebase";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyBs3xDT6E7GroN-yXwlA96qaBBj13Urh7E",
  authDomain: "community2020-f9f93.firebaseapp.com",
  databaseURL: "https://community2020-f9f93.firebaseio.com",
  projectId: "community2020-f9f93",
  storageBucket: "community2020-f9f93.appspot.com",
  messagingSenderId: "514950059109",
  appId: "1:514950059109:web:dfa557a5bdc7896234228c",
  measurementId: "G-9X8ZSDRT9Y",
};

firebase.initializeApp(firebaseConfig);

const firestore = new firebase.firestore();

export default firestore;
