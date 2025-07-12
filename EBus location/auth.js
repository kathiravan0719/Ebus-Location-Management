// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL5r_UgC4yR9vSwf_O0iyp-P502fX1P14",
  authDomain: "loginform-93e3d.firebaseapp.com",
  projectId: "loginform-93e3d",
  storageBucket: "loginform-93e3d.firebasestorage.app",
  messagingSenderId: "461980811863",
  appId: "1:461980811863:web:b9285f33d027b862239912",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Registration
const registerForm = document.getElementById("Registerform");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration Successful!");
      window.location.href = "Login.html";
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
  });
}

// Handle Login
const loginForm = document.getElementById("loginform");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      window.location.href = "dashboard.html";
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  });
}
