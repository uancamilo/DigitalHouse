const prompt = require("prompt-sync")({ sigint: true });

const temperatura = prompt("Cual es la temperatura? ");

let text;
let llueve = prompt("Llueve? ");



switch (llueve) {
  case "si":
    text = "debes llevar paraguas";
    break;
  case "no":
  default:
    text = "No es necesario llevar paraguas";
}

console.log("La temparatura es " + temperatura + "°");

console.log(text);

