
alert("Ohayo !")
let character = { 
    name: "Korra",
    age : 22,
    items_to_give : ["baton-volant"," katana"," bracelet"],
    giveItems: function(){ 
        Math.floor(Math.random() * items_to_give);
    }
    
}

for ( let key in character) {
    console.log(character[key]);
}
console.log(character.items_to_give);