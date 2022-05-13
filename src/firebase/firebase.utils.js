import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCQK-zhbH8dz_86xJediWC3oINaO_kvvkc",
    authDomain: "crwn-db-e71ef.firebaseapp.com",
    projectId: "crwn-db-e71ef",
    storageBucket: "crwn-db-e71ef.appspot.com",
    messagingSenderId: "593192700577",
    appId: "1:593192700577:web:9b49820088b3d2b2443ee0",
    measurementId: "G-8YJ8NPNNBT"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth(); 
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
