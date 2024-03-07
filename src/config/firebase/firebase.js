import { initializeApp , getApps } from "firebase/app";
import { collection, doc, setDoc  , getDocs , getFirestore , where , query , deleteDoc  , updateDoc , increment  , getDoc  , orderBy , limit , or } from "firebase/firestore";
import { signInWithEmailAndPassword , getAuth , signOut , updatePassword  , createUserWithEmailAndPassword , onAuthStateChanged , updateProfile  , fetchSignInMethodsForEmail   } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL  , refFromURL, deleteObject } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyChT5IfQb59bIYTvzAq1gsIXV-zyzUN1Wg",
  authDomain: "hack-makan.firebaseapp.com",
  projectId: "hack-makan",
  storageBucket: "hack-makan.appspot.com",
  messagingSenderId: "389227807442",
  appId: "1:389227807442:web:43d1b31fe3dbedd9a5a30b",
  measurementId: "G-TV0K77HJHW"
};

  
   const FIREBASE_APP = initializeApp(firebaseConfig);
   const auth = getAuth(FIREBASE_APP);
   const db = getFirestore(FIREBASE_APP);
   const storage = getStorage(FIREBASE_APP);




   export { FIREBASE_APP , auth , db ,
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged , setDoc , doc , where , query , collection , getDocs   , deleteDoc , updateDoc , increment , getDoc  , signOut , orderBy ,limit , updatePassword  , updateProfile , fetchSignInMethodsForEmail , storage , ref , getDownloadURL , uploadBytes , refFromURL, deleteObject , or  }