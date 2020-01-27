import firebase from "@firebase/app";
import "@firebase/firestore";

// Initialize Cloud Firestore through Firebase/ we got these from project setting in firebase
firebase.initializeApp({
  apiKey: "AIzaSyD2UkKyXTXJNHKCYidvKx7UE8X1iRKPWTw",
  authDomain: "messages-9978e.firebaseapp.com",
  databaseURL: "https://messages-9978e.firebaseio.com",
  projectId: "messages-9978e",
  storageBucket: "messages-9978e.appspot.com",
  messagingSenderId: "816078238540",
  appId: "1:816078238540:web:381481b6863a9fb65bd5e9",
  measurementId: "G-4SMW0ZQC31"
});

export default firebase.firestore()