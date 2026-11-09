const casas = document.querySelectorAll(".casa");
const textoStatus = document.querySelector("#status");
const reiniciar = document.querySelector("#reiniciar");

let jogadorAtual = "X";
let jogoAtivo = true;

const combinacoesVencedoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function verificarVitoria() {
  for (const combinacao of combinacoesVencedoras) {
    const [a, b, c] = combinacao;

    if (
      casas[a].textContent !== "" &&
      casas[a].textContent === casas[b].textContent &&
      casas[a].textContent === casas[c].textContent
    ) {
      textoStatus.textContent = `Jogador ${jogadorAtual} venceu!`;
      jogoAtivo = false;
      return;
    }
  }

  const empate = [...casas].every(casa => casa.textContent !== "");

  if (empate) {
    textoStatus.textContent = "Empate!";
    jogoAtivo = false;
  }
}

casas.forEach(casa => {
  casa.addEventListener("click", () => {
    if (!jogoAtivo || casa.textContent !== "") {
      return;
    }

    casa.textContent = jogadorAtual;

    verificarVitoria();

    if (jogoAtivo) {
      jogadorAtual = jogadorAtual === "X" ? "O" : "X";
      textoStatus.textContent = `Vez do jogador ${jogadorAtual}`;
    }
  });
});

reiniciar.addEventListener("click", () => {
  casas.forEach(casa => {
    casa.textContent = "";
  });

  jogadorAtual = "X";
  jogoAtivo = true;
  textoStatus.textContent = "Vez do jogador X";
});
