function affiche() {

    let tab = [-2, 1, 4];

    function soustrait(x) {
        if (x > 0 || x == 0) {
            return x - 2;
        } else {
            alert('Nombre négatif !');
        }
    }

    alert(soustrait(tab[0]));
    alert(soustrait(tab[tab.length - 1]));


}