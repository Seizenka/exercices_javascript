function resultat() {

    let pointure = prompt("Salut, qu'elle est ta pointure ?");
    let annee = prompt("Et qu\'elle est ton année de naissance ?");

    alert(Number(pointure) * 2 + 5 * 50 - Number(annee) + 1776 );
}