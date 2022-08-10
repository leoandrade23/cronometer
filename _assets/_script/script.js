let botoes = document.querySelectorAll("button");
let tempo = document.querySelector(".cronometro h2");
let ms = 0;
let data = new Date();
let timer;

data.setHours(0, 0, 0, 0);

function cronometro() {
  ms += 10;
  data.setHours(0, 0, 0, ms);
  let horas = (data.getHours() < 10 ? "0" : "") + data.getHours();
  let minutos = (data.getMinutes() < 10 ? "0" : "") + data.getMinutes();
  let segundos = (data.getSeconds() < 10 ? "0" : "") + data.getSeconds();
  let millis =
    (data.getMilliseconds() < 100 ? "0" : "") +
    (data.getMilliseconds() == 0 ? "0" : "") +
    data.getMilliseconds();
  tempo.innerHTML = `${horas}:${minutos}:${segundos}:${millis}`;
}

botoes[0].addEventListener("click", () => {
  botoes[0].innerText == "Iniciar"
    ? (iniciar(), (botoes[0].innerText = "Pausar"))
    : (pausar(), (botoes[0].innerText = "Iniciar"));
});

//Iniciar
function iniciar() {
  timer = setInterval(cronometro, 10);
}

//Pausar
function pausar() {
  clearInterval(timer);
}

//Zerar
botoes[1].addEventListener("click", () => {
  clearInterval(timer);
  tempo.innerHTML = "00:00:00:000";
  botoes[0].innerText = "Iniciar";
  ms = 0;
});
