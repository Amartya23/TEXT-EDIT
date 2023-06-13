
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBio0EtXjw5dOI6Ctn7474C59xpf8Rq6Gk",
  authDomain: "text-edit-9ff85.firebaseapp.com",
  databaseURL: "https://text-edit-9ff85-default-rtdb.firebaseio.com",
  projectId: "text-edit-9ff85",
  storageBucket: "text-edit-9ff85.appspot.com",
  messagingSenderId: "338454520420",
  appId: "1:338454520420:web:ccaf07f48fa22aa4783571",

};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


    

