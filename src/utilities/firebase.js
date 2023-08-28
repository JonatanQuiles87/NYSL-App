// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import {getDatabase, ref as ref_database, push, update} from "firebase/database";
import {useList} from "react-firebase-hooks/database";
import {getStorage, ref as ref_storage, uploadBytes, getDownloadURL} from "firebase/storage";
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
export const storage = getStorage(firebaseApp);

const useData = (path) => {
    const dbRef = ref_database(database, path);
    const [snapshots, loading, error] = useList(dbRef);
    return [snapshots, loading, error];
};

const submitMessage = async (path, user, messageText) => {
    const updatedData = {};
    const newMessageData = {
        "author": user.displayName,
        "email": user.email,
        "text": messageText,
        "timestamp": Date.now()
    };
    const uniqueMessageId = push(ref_database(database, path), newMessageData).key;
    updatedData[uniqueMessageId] = newMessageData;

    await update(ref_database(database, path), updatedData);
}
//export const submitMessage = async (path, user, messageText) => {
//     const key = randomId();
//     const messageData = {};
//     messageData[key] = {
//             "author": user.displayName,
//             "email": user.email,
//             "text": messageText,
//             "timestamp": Date.now()
//     };
//     console.log("messageData", messageData);
//     // ref(database, path).push(data);
//     await update(ref(database, path), messageData);
// }
// function randomId(): string {
//     const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
//     return uint32.toString(16);
// }

const submitImageInfo = async (path, user, url) => {
    const updatedData = {};
    const newImageInfo = {
        "author": user.displayName,
        "email": user.email,
        "url": url,
        "timestamp": Date.now()
    };
    const uniqueImageId = push(ref_database(database, path), newImageInfo).key;
    updatedData[uniqueImageId] = newImageInfo;
    await update(ref_database(database,path), updatedData);
}

const uploadImageToFirebase = (user, path, image) => {
    const storageRef = ref_storage(storage, path);
    const pathForDatabase = path.split('/').slice(0, 2).join('/');
    console.log('pathForDatabase', pathForDatabase);
    uploadBytes(storageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then(url => {
            submitImageInfo(pathForDatabase, user, url).then(() => {   // We used to be updating setImageUrlList in PicturesPage component here.
                alert("Image is uploaded to firebase");
            });
        });
    });
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

export {auth, signInWithGoogle, signOutFirebase, useData, submitMessage, uploadImageToFirebase};