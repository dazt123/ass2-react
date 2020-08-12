import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAdCne218rOoZkDZABU3wvHyRiufEly0uY",
    authDomain: "react-image-e3ef3.firebaseapp.com",
    databaseURL: "https://react-image-e3ef3.firebaseio.com",
    projectId: "react-image-e3ef3",
    storageBucket: "react-image-e3ef3.appspot.com",
    messagingSenderId: "48416552373",
    appId: "1:48416552373:web:79c8947c6dbcbe087555fc",
    measurementId: "G-67RKT92M8Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase