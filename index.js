const btn = document.getElementById("button");
const descricaoConselho = document.getElementById("descricao");
const idConselho = document.getElementById("id-conselho");

btn.addEventListener("click", async function pegarConselho() {
  const url = "	https://api.adviceslip.com/advice";

  const resposta = await fetch(url);

  const json = await resposta.json();

  // novoId = json.slip.id;

  descricaoConselho.innerHTML = json.slip.advice;
  idConselho.innerHTML = `Advice #${json.slip.id}`;
});
