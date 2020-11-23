import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-database'


var firebaseConfig = {
    apiKey: "AIzaSyDPrIq8tsWvPh5_YagnQOkd8hxSAn_OLqc",
    authDomain: "cafeteria-9bd7a.firebaseapp.com",
    databaseURL: "https://cafeteria-9bd7a.firebaseio.com",
    projectId: "cafeteria-9bd7a",
    storageBucket: "cafeteria-9bd7a.appspot.com",
    messagingSenderId: "600824245727",
    appId: "1:600824245727:web:ea6de86bedb3c5f9ad686a"
  };

  firebase.initializeApp(firebaseConfig);
  export const db= firebase.database()
  export const auth = firebase.auth()

  export default firebase