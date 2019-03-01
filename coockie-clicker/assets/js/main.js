//Les variables de base
let multiplicateur = document.getElementById("multiplicateur");
let autoclicker = document.getElementById("autoclicker");
let bonus = docuement.getElementById("bonus");
let affichage = document.getElementById("affichage");
let cookie = document.getElementById("canvas");

//Nombre de cookie
let score = 0;
//Initialisation du multiplicateur
let multiplicateur = 1;
//tableau des prix
let prix = [0 , 50 , 150, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 20000, 40000, 60000, 80000, 100000];
let 

let autoclickerBought = false;
















//Le cookie
function fillCircle(){
let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

ctx.beginPath();
ctx.fillStyle="#FFCA57"
ctx.arc(200, 200, 190, 0, 2 * Math.PI);
ctx.fill();
}
fillCircle(); 


