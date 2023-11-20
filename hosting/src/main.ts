import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAZV5sajK5IOVU_EEksXyN0gpcGoJlsuE8",
  authDomain: "hammrpg-c7378.firebaseapp.com",
  projectId: "hammrpg-c7378",
  storageBucket: "hammrpg-c7378.appspot.com",
  messagingSenderId: "385634865690",
  appId: "1:385634865690:web:0306042c5bae974b4737a3",
  measurementId: "G-LTK3FFYZ11"
})

const auth = getAuth(firebaseApp);
const button = document.querySelector('button');

onAuthStateChanged(auth, user => {
  if (user == null) { return; }
  console.log(user);
})

button?.addEventListener('click', _clickEvent => {
  signInWithRedirect(auth, new GoogleAuthProvider())
});