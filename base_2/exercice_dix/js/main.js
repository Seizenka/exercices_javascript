function somme() {

    let tab = [];
    for (let i = 0; i < 3; i++) {
        let nombre = prompt('Veuillez entrer un nombre');      
        console.log(i);
        tab.push(nombre);
    }
    let somme = parseInt(tab[0]) + parseInt(tab[1]) + parseInt(tab[2]);
    let resultat = (tab[0] + ' + ' + tab[1] + ' + ' + tab[2] + ' = ' + somme);
    alert(somme && resultat);
}