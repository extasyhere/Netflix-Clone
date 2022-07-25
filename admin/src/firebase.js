
import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyAUlN95kXO6cdmxKAS2yHBcDdgFwxcgPbk",
    authDomain: "netflix-1123bg.firebaseapp.com",
    projectId: "netflix-1123bg",
    storageBucket: "netflix-1123bg.appspot.com",
    messagingSenderId: "181812340982",
    appId: "1:181812340982:web:2e1644c7e53e5cd57c24d7",
    measurementId: "G-NX4HCJS71T"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;