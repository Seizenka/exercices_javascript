function surFaceCercle() {

    console.log("Affichage du message de bienvenue");
    alert('Bienvenue, dans notre programme de calcul !');

    let rayon = prompt("Saisissez un rayon");
    console.log('L\'utilisateur a entré un rayon');

    let resultat = (+rayon * +rayon) * Math.PI;
    alert(resultat);



}