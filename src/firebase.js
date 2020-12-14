import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAoQu3od9ym2GhAld1HbZ1Zij9d8jVvgQY",
    authDomain: "myfacebook-5f389.firebaseapp.com",
    projectId: "myfacebook-5f389",
    storageBucket: "myfacebook-5f389.appspot.com",
    messagingSenderId: "288187447908",
    appId: "1:288187447908:web:397affe68b85cf7acc7d71",
    measurementId: "G-G52T0Q8MN6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db