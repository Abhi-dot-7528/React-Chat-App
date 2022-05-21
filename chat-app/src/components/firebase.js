import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAV_Ux_oIy8YH70deX8Lx_x8eYRe-9IsY0",
    authDomain: "chat-app-70992.firebaseapp.com",
    projectId: "chat-app-70992",
    storageBucket: "chat-app-70992.appspot.com",
    messagingSenderId: "850376213827",
    appId: "1:850376213827:web:bfb4e5c990903fa7f25bf6",
    measurementId: "G-PW6G4J3BWT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;