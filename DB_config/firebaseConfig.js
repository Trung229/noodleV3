import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDBqO6rPE7gRvGi-mFbY-QIRR4B30NYgyI",
    authDomain: "noodle-b5213.firebaseapp.com",
    projectId: "noodle-b5213",
    storageBucket: "noodle-b5213.appspot.com",
    messagingSenderId: "445409372450",
    appId: "1:445409372450:web:d9d6221fbacac47bcf5d7b"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ experimentalForceLongPolling: true });

export default firebase;