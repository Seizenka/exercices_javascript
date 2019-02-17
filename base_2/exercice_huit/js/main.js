function jourDeLaSemaine() {

    let dt=new Date();
    let jour=dt.getDay();

switch(jour) {
   case 0:
       alert("Dimanche !");
       break;
   case 6:
       alert("Samedi !");
       break;
   default:
       document.write("Nous sommes en pleine semaine, GO BOULOT !");
       break;
}

}