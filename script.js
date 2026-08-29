// =============================
// CONFIGURAÇÕES FÁCEIS DE EDITAR
// =============================

// Data usada no contador: 01/03/2025.
// Se quiser mudar, altere apenas esta linha.
const inicio = new Date("2025-03-01T00:00:00");

// =============================
// CONTADOR
// =============================
function atualizarContador() {
  const agora = new Date();
  let diferenca = Math.max(0, agora - inicio);

  const segundo = 1000;
  const minuto = segundo * 60;
  const hora = minuto * 60;
  const dia = hora * 24;

  const dias = Math.floor(diferenca / dia);
  diferenca %= dia;
  const horas = Math.floor(diferenca / hora);
  diferenca %= hora;
  const minutos = Math.floor(diferenca / minuto);
  diferenca %= minuto;
  const segundos = Math.floor(diferenca / segundo);

  document.getElementById("days").textContent = dias;
  document.getElementById("hours").textContent = horas;
  document.getElementById("minutes").textContent = minutos;
  document.getElementById("seconds").textContent = segundos;
}

atualizarContador();
setInterval(atualizarContador, 1000);

// =============================
// MÚSICA
// =============================
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicBtn.textContent = "❚❚ Pausar nossa música";
    } catch {
      musicBtn.textContent = "Toque novamente para reproduzir";
    }
  } else {
    music.pause();
    musicBtn.textContent = "▶ Tocar nossa música";
  }
});

// =============================
// CORAÇÕES CAINDO
// =============================
const hearts = document.getElementById("hearts");

function criarCoracao() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.25 ? "💜" : "♡";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 20) + "px";
  heart.style.animationDuration = (5 + Math.random() * 7) + "s";

  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 13000);
}

setInterval(criarCoracao, 550);
