function draw() {
    let c = document.getElementById("mon_canvas");
    let ctx = c.getContext("2d");

    //tige du drapeau
    ctx.beginPath();
    ctx.moveTo(50,80);
    ctx.lineTo(50,300);
    ctx.strokeStyle = "brown";
    ctx.lineWidth = 5;
    ctx.lineCap = "round"; 
    ctx.stroke();

    //partie noire
    ctx.beginPath();
    ctx.moveTo(50,80);
    ctx.lineTo(100,80);
    ctx.lineTo(100,200);
    ctx.lineTo(50,200);
    ctx.fillStyle = "black";
    ctx.fill();

    //partie jaune
    ctx.beginPath();
    ctx.moveTo(100,80);
    ctx.lineTo(150,80);
    ctx.lineTo(150,200);
    ctx.lineTo(100,200);
    ctx.fillStyle = "yellow";
    ctx.fill();

    //partie rouge
    ctx.beginPath();
    ctx.moveTo(150,80);
    ctx.lineTo(200,80);
    ctx.lineTo(200,200);
    ctx.lineTo(150,200);
    ctx.fillStyle = "red";
    ctx.fill();
}