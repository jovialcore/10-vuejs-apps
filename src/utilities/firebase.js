import firebase from "firebase/app";
import "firebase/auth";

//firebase configuration details

const firebaseConfig = {
  apiKey: "AIzaSyDm-jyEkBZ2QonbXry9YSHOhollPTHPpKI",
  authDomain: "vuejslogger.firebaseapp.com",
  projectId: "vuejslogger",
  storageBucket: "vuejslogger.appspot.com",
  messagingSenderId: "10200765334",
  appId: "1:10200765334:web:2ffb10336e82047f6c03b7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;

