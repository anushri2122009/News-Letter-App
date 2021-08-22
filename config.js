import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAcpiKE8G0o_kckehq-vtHKCkDpPERhGZc",
    authDomain: "news-letter-app-8c02f.firebaseapp.com",
    databaseURL: "https://news-letter-app-8c02f-default-rtdb.firebaseio.com",
    projectId: "news-letter-app-8c02f",
    storageBucket: "news-letter-app-8c02f.appspot.com",
    messagingSenderId: "33502906159",
    appId: "1:33502906159:web:1dda5f996914f8330b03da"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.database();