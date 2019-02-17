function conversionTemperature() {

    let choix = prompt('Veuillez faire un choix. \n Menu :\n Fin du programme=1\n De Celsius vers Fahrenheit=2\n De Celsius vers Kelvin=3\n De Fahrenheit vers Celsius=4\n De Fahrenheit vers Kelvin=5\n De Kelvin vers Celsius=6\n De Kelvin vers Fahrenheit=7');

    if (choix == 1 || choix == null) {
        alert("A plus tard");

    } else if (choix == 2) {
        const CtoF = prompt("Vous venez de sélectionner le choix n°2 \"De Celsius vers Fahrenheit\", \n Choisissez le degré Celsius à convertir en Fahrenheit ?")

        const CtoFResultat = CtoF * 1.8 + 32

        alert(CtoF + " °C donne en Fahrenheit " + CtoFResultat + " °F ");

    } else if (choix == 3) {
        const CtoK = prompt("Vous venez de sélectionner le choix n°3 \"De Celsius vers Kelvin\",\n Choisissez le degré Celsius à convertir en Kelvin ?");

        const CtoKResultat = CtoK + 273.15


        alert(CtoK + " °C donne en Kelvin " + CtoKResultat + " K ");

    } else if (choix == 4) {
        const FtoC = prompt("Vous venez de sélectionner le choix n°4 \"De Fahrenheit vers Celsius\",\n Choisissez le degré Fahrenheit à convertir en Celsius ?");

        const FtoCResultat = FtoC / 1.8 - 32

        alert(FtoC + " °F donne en Celsius " + FtoCResultat + " °C ");
    } else if (choix == 5) {
        const FtoK = prompt("Vous venez de sélectionner le choix n°5 \"De Fahrenheit vers Kelvin\",\n Choisissez le degré Fahrenheit à convertir en Kelvin ?");

        const FtoKResultat_part = FtoK - 32
        const FtoKResult = FtoKResultat_part * 0.5555555554 + 273.15


        alert(FtoK + " °F donne en  Kelvin " + FtoKresult + " K ");
    } else if (choix == 6) {
        const KtoC = prompt("Vous venez de sélectionner le choix n°6 \"De Kelvin vers Celsius\",\n Choisissez le nombre de Kelvin à convertir en degré Celsius ?");

        const KtoCResultat = KtoC - 273.15


        alert(KtoC + " K donne en Celsius " + KtoCResultat + " °C ");

    } else if (choix == 7) {
        const KtoF = prompt("Vous venez de sélectionner le choix n°7 \"De Kelvin vers Fahrenheit\",\n Choisissez le nombre de Kelvin à convertir en degré Fahrenheit ?");

        const KtoFResultat_part = KtoF - 273.15
        const KtoFResultat = KtoFResultat_part / 0.5555555554 + 32


        alert(KtoF + " °F donne en  Kelvin " + KtoFResultat + " K ");
    } else {
        alert("Oups ! Veuillez choisir un numéro dans le menu !")
    }
}