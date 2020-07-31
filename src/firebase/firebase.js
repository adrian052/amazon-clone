import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBSZY20Qyc1rHMsqw7TPhrTtHvEPw6aTI4",
    authDomain: "clone-adrian.firebaseapp.com",
    databaseURL: "https://clone-adrian.firebaseio.com",
    projectId: "clone-adrian",
    storageBucket: "clone-adrian.appspot.com",
    messagingSenderId: "888608395312",
    appId: "1:888608395312:web:6e62f86dcc7c5614845df5",
    measurementId: "G-CNJV6KT2H3"
})

//const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }