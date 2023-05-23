import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZZ0R7ioMjgoz1D6o080-gZ8Tpc-f48fQ",
    authDomain: "personalwesite-e69b0.firebaseapp.com",
    projectId: "personalwesite-e69b0",
    storageBucket: "personalwesite-e69b0.appspot.com",
    messagingSenderId: "958557093869",
    appId: "1:958557093869:web:26a483c7afef6fb38c71e4",
    measurementId: "G-6TBR79R5MK"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const db = getFirestore(app);

export {db, storage};