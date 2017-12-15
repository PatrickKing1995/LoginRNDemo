import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyACpt_lwbuh2_fCRGC46q3Fwt_TC676-_s",
    authDomain: "loginrn-da643.firebaseapp.com",
    databaseURL: "https://loginrn-da643.firebaseio.com",
    projectId: "loginrn-da643",
    storageBucket: "loginrn-da643.appspot.com",
    messagingSenderId: "88295450125"
  };
 export const firebaseApp = firebase.initializeApp(config);