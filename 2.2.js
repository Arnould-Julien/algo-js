// Exercice 2.2.js

const min = parseInt(prompt("Entrez le nombre minimum :"));
const max = parseInt(prompt("Entrez le nombre maximum :"));
const current = parseInt(prompt("Entrez le nombre courant :"));


if (min > max) {
  console.log("Désolé, mais le nombre minimum ne peut pas être supérieur au nombre maximum.");
 
  throw new Error("Erreur : le nombre minimum est supérieur au nombre maximum.");
}


if (current >= min && current <= max) {
  console.log("Le nombre courant est compris entre le nombre minimum et le nombre maximum.");
} else {
  console.log("Le nombre courant n'est pas compris entre le nombre minimum et le nombre maximum.");
}
