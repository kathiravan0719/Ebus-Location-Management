// js/search-bus.js
import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
  query,
  where
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const form = document.getElementById("searchForm");
const results = document.getElementById("results");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const source = document.getElementById("source").value;
  const destination = document.getElementById("destination").value;

  const q = query(collection(db, "buses"),
    where("source", "==", source),
    where("destination", "==", destination)
  );

  try {
    const snapshot = await getDocs(q);
    results.innerHTML = "";

    if (snapshot.empty) {
      results.innerHTML = "<p>No buses found.</p>";
    } else {
      snapshot.forEach(doc => {
        const bus = doc.data();
        const div = document.createElement("div");
        div.textContent = `${bus.busName} (${bus.busType}) - Contact: ${bus.contact}`;
        results.appendChild(div);
      });
    }
  } catch (err) {
    alert("Search failed: " + err.message);
  }
});
