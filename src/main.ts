import "./style.css";

const popRock = "🎵 Pop rock";
const rock = "🎸 Rock";
const hardRock = "🤘 HardRock";
const clasica = "🎼 Clasica";

const estilo = "background-color: green; font-size: 30px; font-weight: bold;";

interface grupoMusical {
  nombreGrupo: string;
  fundacion: number;
  enActivo: boolean;
  genero: string;
}

const grupo1: grupoMusical = {
  nombreGrupo: "The Beatles",
  fundacion: 1960,
  enActivo: true,
  genero: popRock,
};
const grupo2: grupoMusical = {
  nombreGrupo: "Queen",
  fundacion: 1970,
  enActivo: false,
  genero: rock,
};
const grupo3: grupoMusical = {
  nombreGrupo: "AC DC",
  fundacion: 1973,
  enActivo: true,
  genero: hardRock,
};
const grupo4: grupoMusical = {
  nombreGrupo: "Ludwig van Beethoven",
  fundacion: 1770,
  enActivo: false,
  genero: clasica,
};
const grupo5: grupoMusical = {
  nombreGrupo: "The Rolling Stones",
  fundacion: 1962,
  enActivo: true,
  genero: rock,
};

function print(g: grupoMusical) {
  return g.fundacion + " / Activo: " + g.enActivo + " / " + g.genero;
}

console.log("%c" + grupo1.nombreGrupo, estilo, print(grupo1));
console.log("%c" + grupo2.nombreGrupo, estilo, print(grupo2));
console.log("%c" + grupo3.nombreGrupo, estilo, print(grupo3));
console.log("%c" + grupo4.nombreGrupo, estilo, print(grupo4));
console.log("%c" + grupo5.nombreGrupo, estilo, print(grupo5));
