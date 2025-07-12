// js/auth-guard.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js"; // optional: or paste config here

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Redirect to login page if not authenticated
onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("You must be logged in to access this page.");
    window.location.href = "Login.html";
  }
});
