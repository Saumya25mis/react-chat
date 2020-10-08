import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDXBkH-OwEa5zOdAxR8VFmXreYTGFAj-7k",
    authDomain: "wizardchat-e59ce.firebaseapp.com",
    databaseURL: "https://wizardchat-e59ce.firebaseio.com",
    projectId: "wizardchat-e59ce",
    storageBucket: "wizardchat-e59ce.appspot.com",
    messagingSenderId: "1041502042529",
    appId: "1:1041502042529:web:08952246c291acff0ab3e0"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
  export  const auth = firebase.auth;
  export const db = firebase.database();

