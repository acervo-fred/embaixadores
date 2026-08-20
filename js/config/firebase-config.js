// ============================================================
// Config do Firebase — Portal Embaixadores
// ============================================================
// Este site compartilha o MESMO projeto Firebase da Plataforma
// Campanha (repositório irmão) — é o mesmo banco de dados, só que
// aqui o login é livre (e-mail/senha) pra qualquer embaixador, e lá
// é o painel do administrador.
//
// Cole exatamente o mesmo firebaseConfig usado em
// "Plataforma Campanha/js/config/firebase-config.js" e troque
// USE_FIRESTORE para true nos dois arquivos ao mesmo tempo.
// ============================================================

export const USE_FIRESTORE = true;

export const firebaseConfig = {
  apiKey: "AIzaSyBHCZ5Oh9UpMRMhfgFYlmN1vcYsEvu6EgU",
  authDomain: "bia2026-campanha.firebaseapp.com",
  projectId: "bia2026-campanha",
  storageBucket: "bia2026-campanha.firebasestorage.app",
  messagingSenderId: "836297707914",
  appId: "1:836297707914:web:485952f29addf9a792f873",
};
