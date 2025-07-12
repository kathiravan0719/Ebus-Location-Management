// js/view-buses.js
import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const busList = document.getElementById("busList");

const busesRef = collection(db, "buses");

const displayBuses = async () => {
  try {
    const snapshot = await getDocs(busesRef);
    snapshot.forEach(doc => {
      const bus = doc.data();
      const li = document.createElement("li");
      li.textContent = `${bus.busName} (${bus.busType}) - Contact: ${bus.contact}`;
      busList.appendChild(li);
    });
  } catch (err) {
    alert("Failed to fetch buses: " + err.message);
  }
};

displayBuses();
