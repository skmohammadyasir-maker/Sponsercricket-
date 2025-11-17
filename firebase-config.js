// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDAvBXLhFOcFRvfv5mcPDylmNFTU5gFr-Y",
  authDomain: "blackforce007-cricket-time.firebaseapp.com",
  databaseURL: "https://blackforce007-cricket-time-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blackforce007-cricket-time",
  storageBucket: "blackforce007-cricket-time.firebasestorage.app",
  messagingSenderId: "215574154214",
  appId: "1:215574154214:web:0218e9009f5e24de852427",
  measurementId: "G-149FVV53Y6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
