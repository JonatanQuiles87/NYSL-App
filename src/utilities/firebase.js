// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import {getDatabase, ref, push, update} from "firebase/database";
import {useList} from "react-firebase-hooks/database";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Zp9CHdSlyX86UdDH0arLTY8INi8eWIA",
  authDomain: "nysl-app-ce0de.firebaseapp.com",
  databaseURL: "https://nysl-app-ce0de-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "nysl-app-ce0de",
  storageBucket: "nysl-app-ce0de.appspot.com",
  messagingSenderId: "321571468319",
  appId: "1:321571468319:web:07c897b68cdc2a4aea112a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);


const useData = (path) => {
    const dbRef = ref(database, path);
    const [snapshots, loading, error] = useList(dbRef);
    return [snapshots, loading, error];
};

const setData = async (path, user, messageText) => {
const updatedData = {};
    const newMessageData = {
            "author": user.displayName,
            "email": user.email,
            "text": messageText,
            "timestamp": Date.now()
    };
    const uniqueKey = push(ref(database, path), newMessageData).key;
    updatedData[uniqueKey] = newMessageData;

    await update(ref(database, path), updatedData);
}

const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (err) {
        console.error(err);
    }
}


const signOutFirebase = async () => {
    await signOut(auth);
}


export {auth, signInWithGoogle, signOutFirebase, useData, setData};