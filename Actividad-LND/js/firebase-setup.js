// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue, push, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqNr-3WxTijYmSeI2nU8nWF7bJ8wkY4T4",
  authDomain: "me-quiero-ir-ya.firebaseapp.com",
  databaseURL: "https://me-quiero-ir-ya-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "me-quiero-ir-ya",
  storageBucket: "me-quiero-ir-ya.firebasestorage.app",
  messagingSenderId: "970454753646",
  appId: "1:970454753646:web:db1bdc732cbd0a2cb8617f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default { getDatabase, ref, onValue, push, set };
