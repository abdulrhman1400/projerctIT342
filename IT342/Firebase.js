import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCrT2jgb4keWPBX2jBMJsJKpMoH4vR3dj4",
    authDomain: "it342-44933.firebaseapp.com",
    databaseURL: "https://it342-44933.firebaseio.com",
    projectId: "it342-44933",
    storageBucket: "it342-44933.appspot.com",
    messagingSenderId: "158260334935"
  };
firebase.initializeApp(config);
export default firebase;