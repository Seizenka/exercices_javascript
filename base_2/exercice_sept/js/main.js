function faireChoix() {

    let message;
    let choix = prompt('Choisissez entre 1, 2 ou 3');

switch(choix) {
    case "1":
        message = '1.Merci';
    break;

    case "2":
        message = 'Bonjour !';
    break;

    case "3":
        message = 'Aurevoir !';
    break;

    default:
        message = 'Pardon, que voulez-vous ?';
    
}

alert(message);

}