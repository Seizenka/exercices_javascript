function calculMoyenne() {

    alert('Bienvenue dans notre programme de calcul de la moyenne');
    let x = 0;
    let total = 0;
    let nombreEntier = prompt('Veuillez entrer un nombre entier :');

if (nombreEntier < 0) {
        alert('La moyenne est égale à ' + total / x + ' pour ' + x + ' entrée(s) !');
    }
do {
    if (Number.isInteger(Number(nombreEntier))) {
        total = total + Number(nombreEntier);
        x++;
    } else {
        alert('Attention ! Entrer un nombre entier !')
    }
    nombreEntier = prompt('Veuillez entrer un nombre entier !');
} while (nombreEntier >= 0);

alert('La moyenne est égale à ' + total / x + ' pour ' + x + ' entrée(s) !');

}