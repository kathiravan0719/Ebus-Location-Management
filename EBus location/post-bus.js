// js/post-bus.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
 apiKey: "AIzaSyCL5r_UgC4yR9vSwf_O0iyp-P502fX1P14",
  authDomain: "loginform-93e3d.firebaseapp.com",
  projectId: "loginform-93e3d",
  appId: "1:461980811863:web:b9285f33d027b862239912",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const form = document.getElementById("busForm");

onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("You must be logged in.");
    window.location.href = "Login.html";
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const busName = document.getElementById("busName").value;
    const busType = document.getElementById("busType").value;
    const contact = document.getElementById("contact").value;

    try {
      await addDoc(collection(db, "buses"), {
        busName,
        busType,
        contact,
        postedBy: user.email,
        createdAt: new Date()
      });
      alert("Bus info posted successfully!");
      form.reset();
    } catch (err) {
      alert("Failed to post bus: " + err.message);
    }
  });
});
