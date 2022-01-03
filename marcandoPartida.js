var clubes = [];
var clone = [];
var metade = [];

function marcandoPartida() {
  var inClube1 = document.getElementById("adcClube");
  var clube1 = inClube1.value;

  if (clube1 == "") {
    alert("Digite o nome de um Clube");
    return;
  } else {
    clubes.push(clube1);
  }
  listando();

  inClube1.value = "";
  inClube1.focus();
}
var adc = document.getElementById("adc");
adc.addEventListener("click", marcandoPartida);

function listando() {
  var listandoClubes = "";
  for (var i = 0; i < clubes.length; i++) {
    listandoClubes += clubes[i] + "\n";
  }
  document.getElementById("mostrandoLista1").textContent = "Lista de Clubes" + "\n" + listandoClubes;
}
var listar = document.getElementById("listar");
listar.addEventListener("click",listando);

function partidas() {
  var tamanho = clubes.length;
  times = "";
  if (tamanho % 2 == 1) {
    alert("É necessário um número par de Clubes!");
    return;
  }

  for (var i = 0; i < tamanho / 2; i++) {
    clone.push(clubes[i]);
  }
  for (var j = tamanho / 2; j < clubes.length; j++) {
    metade.push(clubes[j]);
    metade.reverse();
  }
  for (var a = 0; a < clone.length; a++) {
    times += clone[a] + " X " + metade[a] + "\n";
  }
  document.getElementById("mostrandoPartidas").textContent = "TIMES SORTEADOS " + "\n"+ times; 
}

var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", partidas);
