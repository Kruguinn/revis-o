// 1) Criação de variável de texto e numérica

let nome = "Lucas"
let chamada = 13

// 2) Criação de uma lista

let jogos = ["Vôlei de Praia", "FIFA", "GTA V"];

// 3) Utilização de um laço while
console.log ("EXERCÍCIO 3");
console.log ("Jogos favoritos de " + nome + " são: ");

let i = 0;
while (i < 3) {
  console.log(jogos[i]);
  i++;
};

// 4) Criação de um objeto
//console.log ("Os filmes favoritos de " + nome + " são: " );

let filme = {
    flm: "American Pie",
    ano: 1999,
    imdb: 7.0
};
//console.log(filme.flm);
//console.log(filme.ano);
//console.log(filme.imdb);

// 5) Utilização de if-else
if (filme.imdb > 7.0) {
    console.log ("O filme é muito bom!");
  } else if (filme.imdb >= 4.1){
    console.log("O filme é razoável");
  } else {
    console.log("O filme possui uma nota considerada baixa.");
  }
