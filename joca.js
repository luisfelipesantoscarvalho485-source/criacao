import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBLxtClD9OM5BvqdjDaKfJZ1mHbI6m6KO0",
  authDomain: "casamentojoaquim-b7615.firebaseapp.com",
  projectId: "casamentojoaquim-b7615",
  storageBucket: "casamentojoaquim-b7615.firebasestorage.app",
  messagingSenderId: "563952417106",
  appId: "1:563952417106:web:d1b34d3a02fadd7fb4228b",
  measurementId: "G-ZPW5GSQP7X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const checkboxes = document.querySelectorAll(".check-compra");

checkboxes.forEach(async (checkbox, index) => {

  const produtoRef = doc(db, "presentes", `produto-${index}`);

  const status = checkbox
    .closest(".card")
    .querySelector(".status-compra");

  const snapshot = await getDoc(produtoRef);

  if (snapshot.exists()) {

    const comprado = snapshot.data().comprado;

    checkbox.checked = comprado;

    if (comprado) {
      status.style.display = "block";
    }
  }

  checkbox.addEventListener("change", async () => {

    await setDoc(produtoRef, {
      comprado: checkbox.checked
    });

    if (checkbox.checked) {
      status.style.display = "block";
    } else {
      status.style.display = "none";
    }

  });

});