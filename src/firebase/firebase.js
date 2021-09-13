import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBhBFXT5vps3nxPLa53sZEjAdQYktWIeHU",
  authDomain: "auth-dev-d81f6.firebaseapp.com",
  projectId: "auth-dev-d81f6",
  storageBucket: "auth-dev-d81f6.appspot.com",
  messagingSenderId: "765337026747",
  appId: "1:765337026747:web:d17185c3b243e4e4e4299e",
  measurementId: "G-3HSH4FC6B9",
};

export const createUserProfile = async (userAuth, otherdata) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...otherdata,
      });
    } catch (error) {
      console.log("Un probleme est survenue: ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const providerGoogle = new firebase.auth.GoogleAuthProvider();
providerGoogle.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);

const providerFaceBook = new firebase.auth.FacebookAuthProvider();
providerFaceBook.addScope("email");
providerFaceBook.setCustomParameters({ prompt: "select_account" });
export const signInWithFaceBook = () => auth.signInWithPopup(providerFaceBook);

export const signOut = () => auth.signOut();
export default firebase;
