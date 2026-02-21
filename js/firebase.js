import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGN2eHUm2N-MLkvCTPJLzasRjDSu0zZuw",
  authDomain: "project-j-b1dd2.firebaseapp.com",
  projectId: "project-j-b1dd2",
  storageBucket: "project-j-b1dd2.firebasestorage.app",
  messagingSenderId: "1070194947377",
  appId: "1:1070194947377:web:895fa65d0c2302999e2c10",
  measurementId: "G-4BV5C1P5TY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
