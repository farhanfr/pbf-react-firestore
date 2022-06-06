import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyC5BcfrHiuRZyEdV1AhEghd9WiRFS0KdcI",
    authDomain: "reactfirestore-b1cdf.firebaseapp.com",
    projectId: "reactfirestore-b1cdf",
    storageBucket: "reactfirestore-b1cdf.appspot.com",
    messagingSenderId: "248656020606",
    appId: "1:248656020606:web:525c0be7d980cfd58d442f"
  };

firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;