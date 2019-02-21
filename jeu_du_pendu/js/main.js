function pendu() {
    console.log(pendu);


    let tabMot = new Array("B","O","N","J","O","U","R");//le tableau qui contient les lettres du mot à trouver
    let lettreDevine = new Array("","","","","","","");//le tableau qui contient les lettres devinées
    let lettre;
    init();

    function init(){
    
        lettre = prompt("Veuillez entrer une lettre").toUpperCase();
        console.log('test');
        guessLetter();//Initialiser la boucle
        console.log(lettreDevine.toString());

    }
    function comparTab() {
        console.log(comparTab);
        if(lettreDevine.toString() === tabMot.toString()) {
            alert('Bravo !');
        } else {
            init();
        }

    }
    function guessLetter() {
   console.log(guessLetter);
        if(lettre === tabMot[0]) {
            console.log(lettreDevine);
            lettreDevine[0] = "B";
            alert("Bravo !")
            comparTab();//fonction pour comparer les deux tableaux

        } else if(lettre === tabMot[1]) {
            lettreDevine[1] = "O";
            lettreDevine[4] = "O";
            console.log(lettreDevine);
            comparTab();
        } else if(lettre === tabMot[2]) {
            lettreDevine[2] = "N";
            console.log(lettreDevine);
            comparTab();
        } else if(lettre === tabMot[3]) {
            lettreDevine[3] = "J";
            console.log(lettreDevine);
            comparTab();
        } else if(lettre === tabMot[5]) {
            lettreDevine[5] = "U";
            console.log(lettreDevine);
            comparTab();
        } else if(lettre === tabMot[6]) {
            lettreDevine[6] = "R";
            console.log(lettreDevine);
            comparTab();
        } else {
            alert("Vous vous êtes trompés");
            let x=0;
            x++;
            console.log(x);
            init();

        }
    
    
    }


    

} //Prochain objectif : jeu du pendu version 2 => raccourcir le code
