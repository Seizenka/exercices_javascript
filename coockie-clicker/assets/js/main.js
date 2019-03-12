//Définir les variables
let click = document.getElementById("canvas"); //Le cookie
let affichage = document.getElementById("affichage");
let autoclick = document.getElementById("autoclick");
let bonus = document.getElementById("bonus");
let multiplicateur = document.getElementById("multiplicateur");



//Initialisation des variables numériques
score = 0;
clickValue = 1;
multi = 1;
multiPrix = 50;
autoPrix = 500;
bonusTime = 30;
bonusPrix = 5000;

//Etape 12, 13 et 14 : désactiver les boutons autoclicker, bonus et multiplicateur
multiOn = false;
autoclickOn = false;
bonusOn = false;

//Le jeu :

//fonction d'affichage
function displayAll(){
    affichage.innerHTML = score + " cookies";
    multiplicateur.innerHTML = "Multiplicateur x" + multi + " (Coûte " + multiPrix + " cookies)";
    autoclick.innerHTML = "Autoclicker (Coûte " + autoPrix + "cookies)";
    bonus.innerHTML = "bonus 200% (Coûte " + bonusPrix + "cookies)";
} //on remplace les éléments par du nouveau contenu dans la page HTML

//étape 3 augmenter le score
function Score(){
    score += clickValue;
    displayAll();
    activateButton();
}

//étape 4 le multiplicateur
function augmenterMultiplicateur(){
    multi = 1;
    multi++;
    score -= multiPrix;
    multiPrix *= multi;
    clickValue *= multi;
    displayAll();
    activateButton();
}

//étape 11 l'autoclicker
function autoclicker(){
    score -= autoPrix;
    autoclickOn = true;
    autoclick.disabled = true;
    function  clickAuto(){
        score += 1;
        displayAll();
    }
    clickAuto();
    setInterval(auto, 1000);
    activateButton();

}

function activateBonus(){
    score -= bonusPrix;
    bonusOn = true;
    clickValue /= 2;
    bonus.innerHTML = "Bonus 200% (Coûte " + bonusPrix + " cookies)";
    displayAll();
    activateButton();
}

function desactiveBonus() {
    bonusOn = false;
    bonusTime = 30;
    clickValue /= 2;
    bonus.innerHTML = "Bonus 200% (Coûte " + bonusPrix + " cookies)";
    displayAll();
}

function bonusTps() {
    if (bonusOn){
        --bonusTime;
        bonus.innerHTML = "Il vous reste " + bonusTime + " secondes de votre bonus";
        if (bonusTime === 0){
            desactiveBonus();
        }
    }
}

//Activation et désactivation des boutons étape 14

function activateButton(){
    if(!multiOn && score >= multiPrix){
        multiplicateur.disabled = false; 
    } //le bouton multiplicateur actif/désactif
    else {
        multiplicateur.disabled = true;
    }

    if(!autoclickOn && score >= autoPrix){
        autoclick.disabled = false;
    }//le bouton autoclick actif/désactif
    else {
        autoclick.disabled = true;
    }
    
    if(!bonusOn && score >= bonusPrix){
        bonus.disabled = false;
    }//le bouton bonus actif/désactif
    else {
        bonus.disabled = true;
    }
}

//toujours appeler les fonctions en fin
displayAll();
activateButton();

//lier nos fonctions dans un événement et les lancer
click.addEventListener('click', Score); //afficher suite à un clic
autoclick.addEventListener('click', autoclicker);
multiplicateur.addEventListener('click', augmenterMultiplicateur);
bonus.addEventListener('click', activateBonus);

bonusInterval = window.setInterval(bonusTps, 1000);

//Le cookie (pas fini)
function fillCircle(){
let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

ctx.beginPath();
ctx.fillStyle="#FFCA57"
ctx.arc(200, 200, 190, 0, 2 * Math.PI);
ctx.fill();
}
fillCircle(); 


