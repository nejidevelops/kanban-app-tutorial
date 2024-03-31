import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBon2l6FClMKuebppL62dviqhO5N2nnbeE",
  authDomain: "kanban-7d107.firebaseapp.com",
  projectId: "kanban-7d107",
  storageBucket: "kanban-7d107.appspot.com",
  messagingSenderId: "671211695926",
  appId: "1:671211695926:web:a103a428c46003fd610d97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore and export it
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy