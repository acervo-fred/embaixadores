import { USE_FIRESTORE, firebaseConfig } from "./config/firebase-config.js";
import { MUNICIPIOS_RJ, buscarMunicipio } from "./municipios-rj.js";

// ---------- elementos ----------

const boxAuth = document.getElementById("boxAuth");
const boxApp = document.getElementById("boxApp");
const tituloAuth = document.getElementById("tituloAuth");
const campoNomeEmbaixador = document.getElementById("campoNomeEmbaixador");
const nomeEmbaixadorInput = document.getElementById("nomeEmbaixador");
const emailAuthInput = document.getElementById("emailAuth");
const senhaAuthInput = document.getElementById("senhaAuth");
const btnAuth = document.getElementById("btnAuth");
const statusAuth = document.getElementById("statusAuth");
const textoAlternaModo = document.getElementById("textoAlternaModo");
const btnAlternaModo = document.getElementById("btnAlternaModo");

const olaUsuario = document.getElementById("olaUsuario");
const btnLogout = document.getElementById("btnLogout");
const contadorNumero = document.getElementById("contadorNumero");

const tituloFormPessoa = document.getElementById("tituloFormPessoa");
const pessoaNomeInput = document.getElementById("pessoaNome");
const erroPessoaNome = document.getElementById("erroPessoaNome");
const pessoaConfiancaInput = document.getElementById("pessoaConfianca");
const confiancaValorSpan = document.getElementById("confiancaValor");
const pessoaMunicipioInput = document.getElementById("pessoaMunicipio");
const listaMunicipiosDatalist = document.getElementById("listaMunicipios");
const erroPessoaMunicipio = document.getElementById("erroPessoaMunicipio");
const btnAdicionarPessoa = document.getElementById("btnAdicionarPessoa");
const btnCancelarEdicao = document.getElementById("btnCancelarEdicao");
const statusPessoa = document.getElementById("statusPessoa");
const listaPessoas = document.getElementById("listaPessoas");

// ---------- município (datalist) ----------

MUNICIPIOS_RJ.forEach((m) => {
  const opt = document.createElement("option");
  opt.value = m.municipio;
  listaMunicipiosDatalist.appendChild(opt);
});

// ---------- slider de confiança ----------

pessoaConfiancaInput.addEventListener("input", () => {
  confiancaValorSpan.textContent = pessoaConfiancaInput.value;
});

// ---------- alternância login / criar conta ----------

let modoCadastro = false;

btnAlternaModo.addEventListener("click", () => {
  modoCadastro = !modoCadastro;
  campoNomeEmbaixador.style.display = modoCadastro ? "block" : "none";
  tituloAuth.textContent = modoCadastro ? "Criar conta" : "Entrar";
  btnAuth.textContent = modoCadastro ? "Criar conta" : "Entrar";
  textoAlternaModo.textContent = modoCadastro ? "Já tem conta?" : "Ainda não tem conta?";
  btnAlternaModo.textContent = modoCadastro ? "Entrar" : "Criar conta";
  statusAuth.textContent = "";
});

// ---------- edição em andamento ----------

let idEmEdicao = null;

function entrarEmModoEdicao(pessoa) {
  idEmEdicao = pessoa.id;
  pessoaNomeInput.value = pessoa.nomeCompleto;
  pessoaConfiancaInput.value = pessoa.confianca;
  confiancaValorSpan.textContent = pessoa.confianca;
  pessoaMunicipioInput.value = pessoa.municipio;
  tituloFormPessoa.textContent = "Editar pessoa";
  btnAdicionarPessoa.textContent = "Salvar alteração";
  btnCancelarEdicao.style.display = "block";
  pessoaNomeInput.scrollIntoView({ behavior: "smooth", block: "center" });
}

function sairDoModoEdicao() {
  idEmEdicao = null;
  tituloFormPessoa.textContent = "Adicionar pessoa";
  btnAdicionarPessoa.textContent = "Adicionar";
  btnCancelarEdicao.style.display = "none";
  limparFormularioPessoa();
}

btnCancelarEdicao.addEventListener("click", sairDoModoEdicao);

// ---------- helpers de UI ----------

function formatarEstrelas(confianca) {
  return "★".repeat(confianca) + "☆".repeat(5 - confianca);
}

function renderizarLista(pessoas, aoEditar, aoRemover) {
  if (!pessoas.length) {
    listaPessoas.innerHTML = "<p class='sem-dados'>Nenhum nome cadastrado ainda.</p>";
    return;
  }
  listaPessoas.innerHTML = "";
  pessoas.forEach((p) => {
    const item = document.createElement("div");
    item.className = "pessoa-item";
    item.innerHTML = `
      <div class="pessoa-info">
        <div class="pessoa-nome">${escaparHtml(p.nomeCompleto)}</div>
        <div class="pessoa-detalhe"><span class="pessoa-estrelas">${formatarEstrelas(p.confianca)}</span> · ${escaparHtml(p.municipio)}</div>
      </div>
      <div class="pessoa-acoes">
        <button class="pessoa-editar" type="button">Editar</button>
        <button class="pessoa-remover" type="button">Remover</button>
      </div>
    `;
    item.querySelector(".pessoa-editar").addEventListener("click", () => aoEditar(p));
    item.querySelector(".pessoa-remover").addEventListener("click", () => aoRemover(p.id));
    listaPessoas.appendChild(item);
  });
}

function escaparHtml(valor) {
  const div = document.createElement("div");
  div.textContent = valor ?? "";
  return div.innerHTML;
}

// Traduz os erros mais comuns do Firebase Auth pra uma mensagem que
// explica o que aconteceu de verdade, em vez de um "e-mail ou senha
// errados" genérico que não ajuda a pessoa a se corrigir.
function mensagemDeErroAuth(erro, estavaCriandoConta) {
  switch (erro.code) {
    case "auth/email-already-in-use":
      return "Esse e-mail já tem conta (pode ter sido criada com login Google em outro lugar). Tente entrar em vez de criar conta, ou use outro e-mail.";
    case "auth/invalid-email":
      return "Esse e-mail não parece válido. Confira e tente de novo.";
    case "auth/weak-password":
      return "Senha muito fraca — use pelo menos 6 caracteres.";
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return estavaCriandoConta
        ? "Não foi possível criar a conta. Tente novamente."
        : "E-mail ou senha incorretos.";
    default:
      return "Não foi possível entrar. Tente novamente em instantes.";
  }
}

function limparFormularioPessoa() {
  pessoaNomeInput.value = "";
  pessoaConfiancaInput.value = 3;
  confiancaValorSpan.textContent = "3";
  pessoaMunicipioInput.value = "";
  erroPessoaNome.textContent = "";
  erroPessoaMunicipio.textContent = "";
}

function mostrarApp(nome, pessoas, contador) {
  boxAuth.style.display = "none";
  boxApp.style.display = "block";
  olaUsuario.textContent = `Olá, ${nome.split(" ")[0]}`;
  contadorNumero.textContent = contador;
}

function mostrarAuth() {
  boxAuth.style.display = "block";
  boxApp.style.display = "none";
}

// Lê e valida os campos do formulário de pessoa. Retorna null (e mostra os
// erros na tela) se algo estiver inválido.
function lerFormularioPessoa() {
  let valido = true;
  erroPessoaNome.textContent = "";
  erroPessoaMunicipio.textContent = "";

  const nomeCompleto = pessoaNomeInput.value.trim();
  if (nomeCompleto.length < 3) {
    erroPessoaNome.textContent = "Informe o nome completo.";
    valido = false;
  }

  const municipioEncontrado = buscarMunicipio(pessoaMunicipioInput.value);
  if (!municipioEncontrado) {
    erroPessoaMunicipio.textContent = "Escolha um município válido do Rio de Janeiro na lista.";
    valido = false;
  }

  if (!valido) return null;

  return {
    nomeCompleto,
    confianca: Number(pessoaConfiancaInput.value),
    municipio: municipioEncontrado.municipio,
    mesorregiao: municipioEncontrado.mesorregiao,
    microrregiao: municipioEncontrado.microrregiao,
  };
}

// ============================================================
// MODO LOCAL (sem Firebase configurado ainda) — usa localStorage
// pra dar pra testar o fluxo inteiro (login, cadastro, edição,
// lista, contador) antes do projeto Firebase existir de verdade.
// ============================================================

const CHAVE_MOCK = "portalEmbaixadoresMock";

function carregarMock() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_MOCK)) || null;
  } catch {
    return null;
  }
}

function salvarMock(dados) {
  localStorage.setItem(CHAVE_MOCK, JSON.stringify(dados));
}

function iniciarModoLocal() {
  console.log("[modo local] USE_FIRESTORE = false — dados salvos só no localStorage deste navegador.");

  function atualizarTela() {
    const mock = carregarMock();
    if (!mock) {
      mostrarAuth();
      return;
    }
    mostrarApp(mock.nome, mock.pessoas, mock.pessoas.length);
    renderizarLista(
      mock.pessoas,
      (pessoa) => entrarEmModoEdicao(pessoa),
      (id) => {
        mock.pessoas = mock.pessoas.filter((p) => p.id !== id);
        salvarMock(mock);
        atualizarTela();
      }
    );
  }

  btnAuth.addEventListener("click", () => {
    const email = emailAuthInput.value.trim();
    const senha = senhaAuthInput.value;
    if (!email || senha.length < 6) {
      statusAuth.textContent = "Preencha e-mail e senha (mínimo 6 caracteres).";
      statusAuth.className = "status-envio erro";
      return;
    }
    if (modoCadastro) {
      const nome = nomeEmbaixadorInput.value.trim();
      if (!nome) {
        statusAuth.textContent = "Informe seu nome completo.";
        statusAuth.className = "status-envio erro";
        return;
      }
      salvarMock({ nome, email, pessoas: [] });
    } else {
      const mock = carregarMock();
      if (!mock || mock.email !== email) {
        statusAuth.textContent = "[modo local] Nenhuma conta local com esse e-mail — crie uma conta primeiro.";
        statusAuth.className = "status-envio erro";
        return;
      }
    }
    statusAuth.textContent = "";
    atualizarTela();
  });

  btnLogout.addEventListener("click", () => {
    localStorage.removeItem(CHAVE_MOCK);
    sairDoModoEdicao();
    atualizarTela();
  });

  btnAdicionarPessoa.addEventListener("click", () => {
    const mock = carregarMock();
    if (!mock) return;

    const dados = lerFormularioPessoa();
    if (!dados) return;

    statusPessoa.textContent = "";

    if (idEmEdicao) {
      const pessoa = mock.pessoas.find((p) => p.id === idEmEdicao);
      if (pessoa) Object.assign(pessoa, dados);
    } else {
      mock.pessoas.unshift({ id: String(Date.now()), ...dados });
    }
    salvarMock(mock);
    sairDoModoEdicao();
    atualizarTela();
  });

  atualizarTela();
}

// ============================================================
// MODO FIREBASE (USE_FIRESTORE = true)
// ============================================================

async function iniciarModoFirebase() {
  const [{ initializeApp }, authMod, firestoreMod] = await Promise.all([
    import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"),
    import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"),
    import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"),
  ]);

  const {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, onAuthStateChanged,
  } = authMod;
  const {
    getFirestore, doc, setDoc, getDoc, collection, getDocs, query, orderBy,
    serverTimestamp, runTransaction,
  } = firestoreMod;

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  async function carregarPessoas(uid) {
    const q = query(collection(db, "embaixadores", uid, "pessoas"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  }

  async function exibirApp(usuario) {
    const embSnap = await getDoc(doc(db, "embaixadores", usuario.uid));
    const dados = embSnap.data() || { nome: usuario.email, totalPessoas: 0 };
    const pessoas = await carregarPessoas(usuario.uid);
    mostrarApp(dados.nome, pessoas, dados.totalPessoas || 0);
    renderizarLista(
      pessoas,
      (pessoa) => entrarEmModoEdicao(pessoa),
      async (pessoaId) => {
        await removerPessoa(usuario.uid, pessoaId);
        await exibirApp(usuario);
      }
    );
  }

  const statsRef = doc(db, "stats", "resumo");

  // Ajusta /stats/resumo (total geral + contagem por nota de confiança).
  // notaAntiga/notaNova = null quando a pessoa está sendo criada/removida.
  async function ajustarStats(tx, notaAntiga, notaNova) {
    const snap = await tx.get(statsRef);
    const dados = snap.exists() ? snap.data() : {};
    const porNota = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, ...(dados.porNota || {}) };
    let total = dados.total || 0;
    if (notaAntiga) {
      porNota[notaAntiga] = Math.max(0, (porNota[notaAntiga] || 0) - 1);
      total = Math.max(0, total - 1);
    }
    if (notaNova) {
      porNota[notaNova] = (porNota[notaNova] || 0) + 1;
      total += 1;
    }
    tx.set(statsRef, { total, porNota });
  }

  async function removerPessoa(uid, pessoaId) {
    const embaixadorRef = doc(db, "embaixadores", uid);
    const pessoaRef = doc(db, "embaixadores", uid, "pessoas", pessoaId);
    await runTransaction(db, async (tx) => {
      const [embSnap, pessoaSnap] = await Promise.all([tx.get(embaixadorRef), tx.get(pessoaRef)]);
      const totalAtual = (embSnap.data() || {}).totalPessoas || 0;
      await ajustarStats(tx, (pessoaSnap.data() || {}).confianca, null);
      tx.delete(pessoaRef);
      tx.update(embaixadorRef, { totalPessoas: Math.max(0, totalAtual - 1) });
    });
  }

  onAuthStateChanged(auth, async (usuario) => {
    if (usuario) {
      await exibirApp(usuario);
    } else {
      mostrarAuth();
    }
  });

  btnAuth.addEventListener("click", async () => {
    const email = emailAuthInput.value.trim();
    const senha = senhaAuthInput.value;
    statusAuth.textContent = "";

    if (!email || senha.length < 6) {
      statusAuth.textContent = "Preencha e-mail e senha (mínimo 6 caracteres).";
      statusAuth.className = "status-envio erro";
      return;
    }

    btnAuth.disabled = true;
    try {
      if (modoCadastro) {
        const nome = nomeEmbaixadorInput.value.trim();
        if (!nome) {
          statusAuth.textContent = "Informe seu nome completo.";
          statusAuth.className = "status-envio erro";
          btnAuth.disabled = false;
          return;
        }
        const cred = await createUserWithEmailAndPassword(auth, email, senha);
        await setDoc(doc(db, "embaixadores", cred.user.uid), {
          nome,
          email,
          createdAt: serverTimestamp(),
          totalPessoas: 0,
        });
      } else {
        await signInWithEmailAndPassword(auth, email, senha);
      }
    } catch (erro) {
      console.error(erro);
      statusAuth.textContent = mensagemDeErroAuth(erro, modoCadastro);
      statusAuth.className = "status-envio erro";
    }
    btnAuth.disabled = false;
  });

  btnLogout.addEventListener("click", () => {
    sairDoModoEdicao();
    signOut(auth);
  });

  btnAdicionarPessoa.addEventListener("click", async () => {
    const usuario = auth.currentUser;
    if (!usuario) return;

    const dados = lerFormularioPessoa();
    if (!dados) return;

    statusPessoa.textContent = "";
    btnAdicionarPessoa.disabled = true;

    try {
      if (idEmEdicao) {
        const pessoaRef = doc(db, "embaixadores", usuario.uid, "pessoas", idEmEdicao);
        await runTransaction(db, async (tx) => {
          const pessoaSnap = await tx.get(pessoaRef);
          const antiga = pessoaSnap.data();
          await ajustarStats(tx, antiga.confianca, dados.confianca);
          tx.update(pessoaRef, { ...dados, createdAt: antiga.createdAt });
        });
      } else {
        const embaixadorRef = doc(db, "embaixadores", usuario.uid);
        const novaPessoaRef = doc(collection(db, "embaixadores", usuario.uid, "pessoas"));
        await runTransaction(db, async (tx) => {
          const embSnap = await tx.get(embaixadorRef);
          const totalAtual = (embSnap.data() || {}).totalPessoas || 0;
          await ajustarStats(tx, null, dados.confianca);
          tx.set(novaPessoaRef, { ...dados, createdAt: serverTimestamp() });
          tx.update(embaixadorRef, { totalPessoas: totalAtual + 1 });
        });
      }
      sairDoModoEdicao();
      await exibirApp(usuario);
    } catch (erro) {
      console.error(erro);
      statusPessoa.textContent = "Não foi possível salvar. Tente novamente.";
      statusPessoa.className = "status-envio erro";
    }
    btnAdicionarPessoa.disabled = false;
  });
}

if (USE_FIRESTORE) {
  iniciarModoFirebase();
} else {
  iniciarModoLocal();
}
