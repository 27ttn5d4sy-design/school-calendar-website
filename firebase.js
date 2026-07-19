import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {

     apiKey: "AIzaSyAiLyZ2pda3ji6wVQvj39_JT9miec3IFy0",
  authDomain: "schoolschedule-9864f.firebaseapp.com",
  projectId: "schoolschedule-9864f",
  storageBucket: "schoolschedule-9864f.firebasestorage.app",
  messagingSenderId: "484640248461",
  appId: "1:484640248461:web:caf93347c8c3188d8708c4",
  measurementId: "G-9ZXCWSV24L"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export { db, storage };