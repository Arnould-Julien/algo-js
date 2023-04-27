//exercice 2.6

const prompt = require("prompt-sync")({
    sigint: true
});

let day = prompt("Entrez un nombre entre 1 et 7")

switch (day) {
    case '1':
        console.log("Le jour" + day + "est : Lundi)");
        break;
    case '2':
        console.log("Le jour" + day + "est : Mardi");
        break;
    case '3':
        console.log("Le jour" + day + "est : Mercredi");
        break;
    case '4':
        console.log("Le jour" + day + "est : Jeudi");
    case '5':
        console.log("Le jour" + day + "est : Vendredi");
        break;
    case '6':
        console.log("Le jour" + day + "est : Samedi");
        break;
    case '7':
        console.log("Le jour"+ day + "est : Dimanche");
        break;

        default:
            console.log("Un nombre entre 1 et 7 uniquement");
            break;
    
}