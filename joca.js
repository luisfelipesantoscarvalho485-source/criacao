import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const checkboxes = document.querySelectorAll(".check-compra");

checkboxes.forEach(async (checkbox, index) => {

  const idProduto = `produto-${index}`;

  const produtoRef = doc(db, "presentes", idProduto);

  const snapshot = await getDoc(produtoRef);

  if (snapshot.exists()) {
    checkbox.checked = snapshot.data().comprado;
  }

  checkbox.addEventListener("change", async () => {

    await setDoc(produtoRef, {
      comprado: checkbox.checked
    });

    if (checkbox.checked) {
      alert("Item marcado como comprado!");
    }

  });

});
