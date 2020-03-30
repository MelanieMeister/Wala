import firebase from "firebase";
import 'firebase/firestore'
const config = {
    apiKey: "AIzaSyAtLI8Bk22NUYzf1DC8g1uew5KRr6UP7Pg",
    authDomain: "wala-ae479.firebaseapp.com",
    databaseURL: "https://wala-ae479.firebaseio.com",
    projectId: "wala-ae479",
    storageBucket: "wala-ae479.appspot.com",
    messagingSenderId: "905497530926",
    appId: "1:905497530926:web:6b6d51f1cae1417df685bf",
    measurementId: "G-MDCXFKBLR3"
};
firebase.initializeApp(config);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export default firebase
