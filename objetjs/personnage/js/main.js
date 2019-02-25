let mainCharacter = {
    name : "Ichigo",
    level : 100,
    life : 1940,
    weapon : Zangetsu = {
        name : "Zangetsu",
        damage : 350,
    }
}

function attack() {
    alert(mainCharacter.name + ' attaque avec l\'arme '  + mainCharacter.weapon.name + ' et les dégats sont de ' + mainCharacter.level * mainCharacter.weapon.damage);
}

attack();