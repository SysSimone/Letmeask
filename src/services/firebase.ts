import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA7U1Pi2nIP3kvwxucA7Bfr-Qy2uhsAh_4",
  authDomain: "letmeask-ba2eb.firebaseapp.com",
  databaseURL: "https://letmeask-ba2eb-default-rtdb.firebaseio.com",
  projectId: "letmeask-ba2eb",
  storageBucket: "letmeask-ba2eb.appspot.com",
  messagingSenderId: "642214255662",
  appId: "1:642214255662:web:15f42d901d8c0ed70593bf"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }
